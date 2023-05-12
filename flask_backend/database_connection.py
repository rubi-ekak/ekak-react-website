# pip install psycopg
import psycopg2
from psycopg2 import OperationalError
from psycopg2.errors import UniqueViolation
from datetime import datetime
from loguru import logger
import os
from dotenv import load_dotenv
from psycopg2.extras import RealDictCursor
import simplejson as json


load_dotenv()

"""
Defining A Loggine
"""
logger.add("Database_Argus.log", level="INFO", rotation="100 MB")
basedir = os.path.abspath(os.path.dirname(__file__))


class ArgusDB:
    """
    db_name,db_user,db_password,db_host,db_port ==> these Data which provide by Heroku PostGreSQL
    q_status ==> query Status . Return -> TRUE ,FALSE,OBJECT, DATA
    __Every Function of this class return q_status
    """
    db_name = os.getenv("DB_NAME")
    db_user = os.getenv("DB_USER")
    db_password = os.getenv("DB_PASSWORD")
    db_host = os.getenv("DB_HOST")
    db_port = os.getenv("DB_PORT")

    def create_connection(self):
        """
        Creating A Connection with PostGreSQL to Perform Operation form Database.

        Return :
        ==>If Connection is Created Return -> Object
        ==>If Connection is Not Created Return -> False
        """
        logger.info("Creating Connection")
        connection = False
        try:
            connection = psycopg2.connect(host=self.db_host, database=self.db_name, user=self.db_user,
                                          password=self.db_password)
            print("Connection to PostgreSQL DB successful")
            logger.info("Successfully Creating Connection")
        except Exception as e:
            print(f"The error '{e}' occurred")
            logger.debug("Issue in Creation Connection")
            logger.exception("Issue Is")
        return connection

    def create_database(self, query):
        """
        Creating New Database


        If DB is created -> Print ("Query Executed successfully )
        If DB is not created -> Print (Error and Return False)

        Parameter : query
        Return :
        ==> q_status = True -> its means New DB is created / Or False -> New Database is not created
        """
        connection = self.create_connection()
        connection.autocommit = True
        cursor = connection.cursor()
        q_status = False  # Query_status
        logger.info("Creating A Database")
        logger.info(str(query))
        if connection != False:
            try:
                cursor.execute(query)
                print("Query executed successfully")
                q_status = True
                logger.info("Successfully Database is Created")
            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.debug("Issue in Creating Database")
                logger.exception("Issue is")
        return q_status

    def create_table(self, query):
        """
        Creating a Table
        if Table is created -> Print ("Query Executed successfully )
        if Table is not created -> Print (Error and Return False)

        Parameter : query
        Return :
        ==> q_status = True -> its means New Table is Created / Or False -> New Table is not created
        """
        connection = self.create_connection()
        q_status = False  # Query_status
        logger.info("Creating Table")
        logger.info(str(query))
        if connection != False:
            try:
                cursor = connection.cursor()
                cursor.execute(query)
                q_status = True
                print("Query executed successfully")
                logger.info("Successfully Created Table")
            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.debug("Issue in Creating Table")
                logger.exception("Issue is ")
        return q_status

    def get_query(self, query):
        """
        Show all the data from table query

        Parameter : query
        Return :
        ==> q_status = True -> its means New Table is Created / Or False -> New Table is not created
        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            cursor = connection.cursor()
            try:
                # This line look horror , Purpose for POSTGRE Wants Values must be Dual Quotes
                # Its Give a QUotes Using "ESCAPE SEQUENCE"
                # query = F'select * from \"argus\".\"{argus_id}_unknown\";'
                cursor.execute(query)
                result = cursor.fetchone()
                logger.info("Successfully Reading Data in a Table")
                return result

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status

    def count_teamMember(self, argus_id):
        """
        Count all the Team Member

        Parameter : query
        Return :
        ==> q_status = True -> its means New Table is Created / Or False -> New Table is not created
        """
        table_name = '\"argus\".\"' + argus_id + '_team\"'
        query = f'SELECT COUNT(*) FROM {table_name}'

        return self.get_query(query)[0]

    def today_Known_Unknown(self, today_date, argus_id):
        """Show  Today Total Known and Unknown(known,Unknown)

        Args:
            today_date (STR): _description_

        Returns:
            _type_: tuples with 2 Values (Known , Unknown)
        """

        query = f'''
        SELECT 
        COUNT(DISTINCT CASE WHEN name LIKE 'unknown%' THEN name END) AS Unknown_present_today,
        COUNT(DISTINCT CASE WHEN name NOT LIKE 'unknown%' THEN name END) AS Known_present_today
        FROM argus."{argus_id}_attendance_entries"
        WHERE date = '{today_date}';
        '''
        # print(query)

        data_known_Unknown = self.get_query(query)
        if type(data_known_Unknown) == bool:
            return (0, 0)
        return data_known_Unknown

    def get_face_encoding(self, argus_id, new_member):
        """
        Show all the data from table query

        Parameter : query
        Return :
        ==> q_status = True ->
        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            cursor = connection.cursor()
            try:
                # This line look horror , Purpose for POSTGRE Wants Values must be Dual Quotes
                # Its Give a QUotes Using "ESCAPE SEQUENCE"
                query = F'Select \"numpy_encoding\" from \"argus\".\"onboarded_unkownface_search_queue_{argus_id}\" where emp_name=\'{new_member}\'  ;'

                # query = F'select \"unknown_id\" from \"argus\".\"{argus_id}_unknown\";'

                cursor.execute(query)
                result = cursor.fetchall()
                logger.info("Successfully Reading Data in a Table")
                result = [i[0] for i in result]
                return result

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status

    def get_all(self, query):
        """
        Show all the data from table query

        Parameter : query
        Return :
        ==> q_status = True -> its means New Table is Created / Or False -> New Table is not created
        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False
        logger.info(str(query))
        if connection != False:
            result = None
            cursor = connection.cursor()
            try:

                cursor.execute(query)
                result = cursor.fetchall()
                logger.info("Successfully Reading Data in a Table")
                return result

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status

    def insert_row(self, query):
        """
        Insert rows into database's table
        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Insert Rows in Table")
        logger.info(str(query))
        q_status = False
        if connection != False:
            try:
                cursor = connection.cursor()
                connection.autocommit = True
                # insert data into db
                # query='''insert into "dave-alpha-build"."dave_device" (dave_id,driver_name,driver_score,travel_time) values ('dave_101','James','100','300');'''
                cursor.execute(query)
                # save into db
                logger.info("Successfully Insert a row in a Table")
                q_status = True
            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status

    def get_all_unknown(self, argus_id):
        """
        Show all the data from table query

        Parameter : query
        Return :
        ==> q_status = True -> its means New Table is Created / Or False -> New Table is not created
        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            cursor = connection.cursor()
            try:
                # This line look horror , Purpose for POSTGRE Wants Values must be Dual Quotes
                # Its Give a QUotes Using "ESCAPE SEQUENCE"
                # query = F'select * from \"argus\".\"{argus_id}_unknown\";'
                query = F'select * from \"argus\".\"{argus_id}_attendance_entries\" where \"name\" like \'unknow%\' ;'

                cursor.execute(query)
                result = cursor.fetchall()
                logger.info("Successfully Reading Data in a Table")
                return result

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status

    def get_unknown_name(self, argus_id):
        """
        Show all the data from table query

        Parameter : query
        Return :
        ==> q_status = True -> its means New Table is Created / Or False -> New Table is not created
        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            cursor = connection.cursor()
            try:
                # This line look horror , Purpose for POSTGRE Wants Values must be Dual Quotes
                # Its Give a QUotes Using "ESCAPE SEQUENCE"
                query = F'select \"unknown_id\" from \"argus\".\"{argus_id}_unknown\";'

                cursor.execute(query)
                result = cursor.fetchall()
                logger.info("Successfully Reading Data in a Table")
                result = [i[0] for i in result]
                return result

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status

    def get_all_team(self, argus_id):
        """
        Show all the Team Member data from table query

        Parameter : query
        Return :
        ==> q_status = [(),()]  List of Team Member Data
        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            cursor = connection.cursor()
            try:
                # This line look horror , Purpose for POSTGRE Wants Values must be Dual Quotes
                # Its Give a QUotes Using "ESCAPE SEQUENCE"
                query = F'select * from \"argus\".\"{argus_id}_team\";'

                cursor.execute(query)
                result = cursor.fetchall()

                logger.info("Successfully Reading Data in a Table")
                return result

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status

    def get_only_name_team(self, argus_id):
        """
        Show all the Team Member data from table query

        Parameter : query
        Return :
        ==> q_status = [(),()]  List of Team Member Data
        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            cursor = connection.cursor()
            try:
                # This line look horror , Purpose for POSTGRE Wants Values must be Dual Quotes
                # Its Give a QUotes Using "ESCAPE SEQUENCE"
                query = F'select emp_name from \"argus\".\"{argus_id}_team\" ;'

                cursor.execute(query)
                result = cursor.fetchall()

                logger.info("Successfully Reading Data in a Table")
                result = [i[0] for i in result]
                return result

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status

    def get_all_un_processed(self, argus_id):
        """
        Show all the data from table query

        Parameter : query
        Return :
        ==> q_status = True -> its means New Table is Created / Or False -> New Table is not created
        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            cursor = connection.cursor()
            try:
                # This line look horror , Purpose for POSTGRE Wants Values must be Dual Quotes
                # Its Give a QUotes Using "ESCAPE SEQUENCE"
                query = F'select * from \"argus\".\"onboarded_unkownface_search_queue_{argus_id}\" where processed=\'false\' ;'
                # select * in onboarded_unkownface_search_queue_argus_id
                # where
                # processed = 0
                cursor.execute(query)
                result = cursor.fetchall()
                # result = [i for i in result]
                logger.info("Successfully Reading Data in a Table")
                return result

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status

    def get_all_onboard_unprocessed(self, argus_id):
        """
        Show all the data from table query

        Parameter : query
        Return :
        ==> q_status = True -> its means New Table is Created / Or False -> New Table is not created
        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            cursor = connection.cursor()
            try:
                # This line look horror , Purpose for POSTGRE Wants Values must be Dual Quotes
                # Its Give a QUotes Using "ESCAPE SEQUENCE"
                query = F'select * from \"argus\".\"onboarded_unkownface_search_queue_{argus_id}\" where processed=\'false\' ;'
                # select * in onboarded_unkownface_search_queue_argus_id
                # where
                # processed = 0
                cursor.execute(query)
                result = cursor.fetchall()
                # result = [i for i in result]
                logger.info("Successfully Reading Data in a Table")
                return result

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status

    def get_all_team_unprocessed(self, argus_id):
        """
        Show all the data from table query

        Parameter : query
        Return :
        ==> q_status = True -> its means New Table is Created / Or False -> New Table is not created
        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            cursor = connection.cursor()
            try:
                # This line look horror , Purpose for POSTGRE Wants Values must be Dual Quotes
                # Its Give a QUotes Using "ESCAPE SEQUENCE"
                query = F'select * from \"argus\".\"{argus_id}_team\" where processed=\'false\' ;'
                # select * in onboarded_unkownface_search_queue_argus_id
                # where
                # processed = 0
                cursor.execute(query)
                result = cursor.fetchall()
                # result = [i for i in result]
                logger.info("Successfully Reading Data in a Table")
                return result

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status

    def get_all_unknown_unprocessed(self, argus_id):
        """
        Show all the data from table query

        Parameter : query
        Return :
        ==> q_status = True -> its means New Table is Created / Or False -> New Table is not created
        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            cursor = connection.cursor()
            try:
                # This line look horror , Purpose for POSTGRE Wants Values must be Dual Quotes
                # Its Give a QUotes Using "ESCAPE SEQUENCE"
                query = F'select * from \"argus\".\"{argus_id}_unknown\" where processed=\'false\' ;'
                # select * in onboarded_unkownface_search_queue_argus_id
                # where
                # processed = 0
                cursor.execute(query)
                result = cursor.fetchall()
                # result = [i for i in result]
                logger.info("Successfully Reading Data in a Table")
                return result

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status

    def update_new_team_member_unknown_face(self, argus_id, new_member, count_face, found_face):
        """
        Update Unknown Faces into New Team Memeber

        Parameter : query
        Return : True

        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            cursor = connection.cursor()
            try:
                connection.autocommit = True
                # This line look horror , Purpose for POSTGRE Wants Values must be Dual Quotes
                # Its Give a QUotes Using "ESCAPE SEQUENCE"
                query = F'Update \"argus\".\"onboarded_unkownface_search_queue_{argus_id}\" set processed=true,found=\'{found_face}\',count_processed=\'{count_face}\' where emp_name=\'{new_member}\'  ;'
                # select * in onboarded_unkownface_search_queue_argus_id
                # where
                # processed = 0

                cursor.execute(query)
                result = True
                # result = [i for i in result]
                logger.info("Successfully Reading Data in a Table")
                return result

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status

    def update_only_face_encoding(self, argus_id, new_member, only_face_encoding):
        """
        Update Unknown Faces into New Team Memeber

        Parameter : query
        Return : True

        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            cursor = connection.cursor()
            try:
                connection.autocommit = True
                # This line look horror , Purpose for POSTGRE Wants Values must be Dual Quotes
                # Its Give a QUotes Using "ESCAPE SEQUENCE"
                query = F'Update \"argus\".\"onboarded_unkownface_search_queue_{argus_id}\" set numpy_encoding=%s where emp_name=\'{new_member}\'  ;'
                # select * in onboarded_unkownface_search_queue_argus_id
                # where
                # processed = 0

                cursor.execute(query, (only_face_encoding,))
                result = True
                # result = [i for i in result]
                logger.info("Successfully Reading Data in a Table")
                return result

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status

    def update_team_face_encoding(self, argus_id: str, emp_name: str, face_encoding: str):
        """
        Update Faces into Team Table

        Parameter : Argus_id,emp_name,face_encoding
        Return : True

        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            cursor = connection.cursor()
            try:
                connection.autocommit = True
                # This line look horror , Purpose for POSTGRE Wants Values must be Dual Quotes
                # Its Give a QUotes Using "ESCAPE SEQUENCE"
                query = F'Update \"argus\".\"{argus_id}_team\" set numpy_encoding=%s where emp_name=\'{emp_name}\'  ;'
                # select * in onboarded_unkownface_search_queue_argus_id
                # where
                # processed = 0

                cursor.execute(query, (face_encoding,))
                result = True
                # result = [i for i in result]
                logger.info("Successfully Reading Data in a Table")
                return result

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status

    def update_team_data(self, argus_id, emp_name, emp_doj, emp_entry_time, emp_exit_time, emp_working_hour):
        """
        Update Faces into Team Table

        Parameter : Argus_id,emp_name,face_encoding
        Return : True

        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            cursor = connection.cursor()
            try:
                connection.autocommit = True
                # This line look horror , Purpose for POSTGRE Wants Values must be Dual Quotes
                # Its Give a QUotes Using "ESCAPE SEQUENCE"
                query = F'Update \"argus\".\"{argus_id}_team\" set emp_name=%s, join_date=%s,entry_time=%s,exit_time=%s,working_hour=%s where emp_name=\'{emp_name}\'  ;'
                # select * in onboarded_unkownface_search_queue_argus_id
                # where
                # processed = 0

                cursor.execute(query, (emp_name, emp_doj, emp_entry_time, emp_exit_time, emp_working_hour,))
                result = True
                # result = [i for i in result]
                logger.info("Successfully Reading Data in a Table")
                return result

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status

    # def update_team_data2(self, argus_id, new_emp_name, edit_email_alert, threshold_value, mondayEntryEdit,mondayExitEdit, tuesdayEntryEdit, tuesdayExitEdit, wednesdayEntryEdit, wednesdayExitEdit,thursdayEntryEdit,thursdayExitEdit, fridayEntryEdit, fridayExitEdit, saturdayEntryEdit, saturdayExitEdit,sundayEntryEdit, sundayExitEdit):
    #     """
    #     Update Faces into Team Table
    #
    #     Parameter : Argus_id,emp_name,face_encoding
    #     Return : True
    #
    #     """
    #     connection = self.create_connection()
    #     # print("Connection Status is :",connection)
    #     logger.info("Reading Data in a Table")
    #     q_status = False
    #
    #     if connection != False:
    #         result = None
    #         cursor = connection.cursor()
    #         try:
    #             connection.autocommit = True
    #             # This line look horror , Purpose for POSTGRE Wants Values must be Dual Quotes
    #             # Its Give a QUotes Using "ESCAPE SEQUENCE"
    #
    #             # query = F'Update \"argus\".\"{argus_id}_team\" set emp_name=%s, join_date=%s,entry_time=%s,exit_time=%s,working_hour=%s where emp_name=\'{emp_name}\'  ;'
    #
    #             query = F'Update \"argus\".\"{argus_id}_team\" set alert_switch=%s , monday_entry_time=%s, monday_exit_time=%s, tuesday_entry_time=%s, tuesday_exit_time=%s, wednesday_entry_time=%s, wednesday_exit_time=%s, thursday_entry_time=%s, thursday_exit_time=%s, friday_entry_time=%s, friday_exit_time=%s,  saturday_entry_time=%s, saturday_exit_time=%s,  sunday_entry_time=%s, sunday_exit_time=%s where emp_name=\'{new_emp_name}\'  ;'
    #
    #             # select * in onboarded_unkownface_search_queue_argus_id
    #             # where
    #             # processed = 0
    #             if edit_email_alert == 'true':
    #                 edit_email_alert = True
    #             else:
    #                 edit_email_alert = False
    #
    #
    #             cursor.execute(query, (edit_email_alert, mondayEntryEdit, mondayExitEdit,tuesdayEntryEdit, tuesdayExitEdit, wednesdayEntryEdit, wednesdayExitEdit,thursdayEntryEdit,thursdayExitEdit, fridayEntryEdit, fridayExitEdit, saturdayEntryEdit,saturdayExitEdit,sundayEntryEdit, sundayExitEdit,))
    #             result = True
    #             # result = [i for i in result]
    #             logger.info("Successfully Reading Data in a Table")
    #             return result
    #
    #         except OperationalError as e:
    #             print(f"The error '{e}' occurred")
    #             logger.info("Issue in Reading Data in a Table")
    #             logger.exception("Issue is")
    #     return q_status

    def update_team_data2(self, argus_id, new_emp_name, edit_email_alert, threshold_value, mondayEntryEdit,
                          mondayExitEdit, tuesdayEntryEdit, tuesdayExitEdit, wednesdayEntryEdit, wednesdayExitEdit,
                          thursdayEntryEdit, thursdayExitEdit, fridayEntryEdit, fridayExitEdit, saturdayEntryEdit,
                          saturdayExitEdit, sundayEntryEdit, sundayExitEdit):
        """
        Update the team data for an employee in the specified Argus ID's team table.

        Parameters:
            - argus_id: The ID of the Argus instance.
            - new_emp_name: The new name of the employee.
            - edit_email_alert: A boolean indicating whether email alerts should be edited.
            - threshold_value: The threshold value.
            - mondayEntryEdit: The new Monday entry time.
            - mondayExitEdit: The new Monday exit time.
            - tuesdayEntryEdit: The new Tuesday entry time.
            - tuesdayExitEdit: The new Tuesday exit time.
            - wednesdayEntryEdit: The new Wednesday entry time.
            - wednesdayExitEdit: The new Wednesday exit time.
            - thursdayEntryEdit: The new Thursday entry time.
            - thursdayExitEdit: The new Thursday exit time.
            - fridayEntryEdit: The new Friday entry time.
            - fridayExitEdit: The new Friday exit time.
            - saturdayEntryEdit: The new Saturday entry time.
            - saturdayExitEdit: The new Saturday exit time.
            - sundayEntryEdit: The new Sunday entry time.
            - sundayExitEdit: The new Sunday exit time.

        Returns:
            - True if the team data was successfully updated, False otherwise.
        """

        # Create a database connection.
        connection = self.create_connection()

        # Log the connection status.
        logger.info("Reading data in a table")

        # Set the query status to False by default.
        q_status = False

        # If a connection was established, proceed with the update.
        if connection != False:
            result = None
            cursor = connection.cursor()

            try:
                # Set autocommit to True to avoid issues with transactions.
                connection.autocommit = True

                # Update the team table with the new data.
                query = f'UPDATE "argus"."{argus_id}_team" SET alert_switch=%s, entry_time_threshold=%s , monday_entry_time=%s, monday_exit_time=%s, tuesday_entry_time=%s, tuesday_exit_time=%s, wednesday_entry_time=%s, wednesday_exit_time=%s, thursday_entry_time=%s, thursday_exit_time=%s, friday_entry_time=%s, friday_exit_time=%s, saturday_entry_time=%s, saturday_exit_time=%s, sunday_entry_time=%s, sunday_exit_time=%s WHERE emp_name=\'{new_emp_name}\'  ;'

                # Convert the edit_email_alert value to a boolean.
                # print(edit_email_alert)
                # if edit_email_alert == 'true' or edit_email_alert is True or edit_email_alert == 'True':
                #     edit_email_alert = True
                # else:
                #     edit_email_alert = False

                edit_email_alert = edit_email_alert in ['true', 'True']

                # Execute the query with the specified values.
                cursor.execute(query, (
                edit_email_alert, threshold_value, mondayEntryEdit, mondayExitEdit, tuesdayEntryEdit, tuesdayExitEdit,
                wednesdayEntryEdit, wednesdayExitEdit, thursdayEntryEdit, thursdayExitEdit, fridayEntryEdit,
                fridayExitEdit, saturdayEntryEdit, saturdayExitEdit, sundayEntryEdit, sundayExitEdit,))
                result = True
                logger.info("Successfully updated the team data")
                return result

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                return False

    def update_uknown_face_encoding(self, argus_id: str, unknown_id: str, face_encoding: str):
        """
        Update Faces into Team Table

        Parameter : Argus_id,emp_name,face_encoding
        Return : True

        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            cursor = connection.cursor()
            try:
                connection.autocommit = True
                # This line look horror , Purpose for POSTGRE Wants Values must be Dual Quotes
                # Its Give a QUotes Using "ESCAPE SEQUENCE"
                query = F'Update \"argus\".\"{argus_id}_unknown\" set numpy_encoding=%s , processed=true where unknown_id=\'{unknown_id}\'   ;'
                # select * in onboarded_unkownface_search_queue_argus_id
                # where
                # processed = 0

                cursor.execute(query, (face_encoding,))
                result = True
                # result = [i for i in result]
                logger.info("Successfully Reading Data in a Table")
                return result

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status

    def update_row(self, query):
        """
        Update Row
        """
        connection = self.create_connection()
        print("Connection is Created")
        logger.info("Updating a Row in Table")
        logger.info(str(query))
        q_status = False
        if connection != False:
            try:
                cursor = connection.cursor()
                connection.autocommit = True
                cursor.execute(query)
                q_status = True
                logger.info("Successfully Update a Row in a Table")
            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.debug("Issue in Updating a Row")
                logger.exception("Issue is")
        return q_status

    def read_driver_score(self, dave_id):
        """
        In 1st Table
        Reading Driver Score
        """
        connection = self.create_connection()
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            try:
                cursor = connection.cursor()
                query = '''Select driver_score,travel_time from "dave-alpha-build"."dave_device" where "dave_id"=%s;'''
                cursor.execute(query, (dave_id,))
                # dave_id , <-  its is a way of writing Query
                logger.info(str(query))
                result = cursor.fetchall()
                logger.info("Successfully Reading Data in a Table")
                return result

            except Exception as e:
                print(e)
                return q_status
        return q_status

    def update_driver_score(self, dave_id, driver_score, travel_time):
        """
        Update Row in Driver Score
        """
        connection = self.create_connection()
        print("Connection is Created")
        logger.info("Updating a Row in Table")

        q_status = False
        if connection != False:
            try:
                cursor = connection.cursor()
                connection.autocommit = True
                # update_query='''UPDATE  "dave-alpha-build".dave_device SET dave_id = Dave_101 WHERE dave_id = dave_101 ;'''
                query = '''UPDATE "dave-alpha-build"."dave_device" SET "driver_score"=%s, "travel_time"=%s Where "dave_id"=%s;'''

                cursor.execute(query, (driver_score, travel_time, dave_id,))
                q_status = True
                logger.info("Successfully Update a Row in a Table")
            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.debug("Issue in Updating a Row")
                logger.exception("Issue is")
        return q_status

    # OPeration For Table 2 for Driver score
    """
    2nd Table Columns (dave_id (varchar),dbx_videos(varchar),is_analyzed(varchar))

    """

    def update_analyzed_video(self, dave_id, video):
        """
        Update Row in Driver Score
        """
        connection = self.create_connection()
        print("Connection is Created")
        logger.info("Updating a Video in Table")

        q_status = False
        if connection != False:
            try:
                cursor = connection.cursor()
                connection.autocommit = True
                # update_query='''UPDATE  "dave-alpha-build".dave_device SET dave_id = Dave_101 WHERE dave_id = dave_101 ;'''
                query = '''UPDATE "dave-alpha-build"."for_driver_score" SET "is_analyzed"=1  WHERE "dbx_videos"=%s and "dave_id"=%s;'''

                cursor.execute(query, (video, dave_id,))
                q_status = True
                logger.info("Successfully Update a Row in a Table")
            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.debug("Issue in Updating a Row")
                logger.exception("Issue is")
        return q_status

    def read_for_driver_score(self):
        """

        In 2nd Table
        Reading for_driver_score table
        Return : If No Issue -> Rows (tuple) OR Return : False

        """
        q_status = False
        try:

            return ArgusDB().get_all('''select * from "dave-alpha-build"."for_driver_score";''')
        except Exception as e:
            print(f"The error '{e}' occurred")
            return q_status

    def insert_new_video(self, dave_id, list_videos_name):
        """

        In 2nd Table
        insert_new_videos
        Return : If No Issue -> True or False

        """
        logger.info("Insert new_Video in for_driver_score in a Table")
        connection = self.create_connection()
        q_status = False
        if connection != False:

            try:
                cursor = connection.cursor()
                connection.autocommit = True
                # print(dave_id,list_videos_name)
                # print(list_videos_name)
                for i in list_videos_name:

                    try:
                        logger.info("_Inserting Video_name {}", i)
                        print(dave_id, i)
                        query = '''insert into "dave-alpha-build"."for_driver_score" (dave_id,dbx_videos,is_analyzed) values (%s,%s,%s);'''
                        cursor.execute(query, (dave_id, i, '0',))

                        q_status = True

                        print(i)
                    except Exception as issue_in_video:
                        logger.debug("_Issue & Skip this in Video {}", i)
                        logger.debug("_Issue is {}", issue_in_video)
                        # Skip this VIdeo Move Forward

                        print(issue_in_video)
                        continue

                # return ArgusDB().get_all('''select * from "dave-alpha-build"."for_driver_score";''')
                # pass
            except Exception as e:
                print(f"The error '{e}' occurred")
                return q_status
        return q_status

    def get_all_videos(self, dave_id):
        """
        Fetching Video from Table 1 for_driver_score

        parameter: <- dave_id

        return: -> all Video list of tuple
        """
        connection = self.create_connection()
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            try:
                print(dave_id)
                cursor = connection.cursor()
                query = '''Select dbx_videos from "dave-alpha-build"."for_driver_score" where "dave_id"=%s;'''
                cursor.execute(query, (dave_id,))
                logger.info(str(query))
                result = cursor.fetchall()
                result = [i[0] for i in result]
                logger.info("Successfully Reading Data in a Table")
                return result
            except Exception as e:
                logger.debug("Issue in Reading Data in a Table {}", e)
                print(e)
                return q_status
        return q_status

    def get_new_videos(self, dave_id):
        """
        Fetching Video from Table 1 for_driver_score

        parameter: <- dave_id

        return: -> all Video list of tuple
        """
        connection = self.create_connection()
        logger.info("Reading New Video in a Table")
        q_status = False

        if connection != False:
            result = None
            try:
                print(dave_id)
                cursor = connection.cursor()
                query = '''Select dbx_videos from "dave-alpha-build"."for_driver_score" where "dave_id"=%s and "is_analyzed"='0' ;'''
                cursor.execute(query, (dave_id,))
                logger.info(str(query))
                result = cursor.fetchall()
                result = [i[0] for i in result]
                logger.info("Successfully New Video Data in a Table")
                return result
            except Exception as e:
                logger.debug("Issue in New Video Data in a Table {}", e)
                print(e)
                return q_status
        return q_status

    def add_new_unknown_img(self, argus_id, unknown_ID, Url, date_time):
        """
        Add a New Team Member

        param: argus_id,emp_name,emp_date,emp_dep,img_link,
        Return : If No Issue -> True or False


        """
        logger.info("Insert new_Video in for_driver_score in a Table")
        connection = self.create_connection()
        q_status = False
        if connection != False:
            cursor = connection.cursor()
            connection.autocommit = True

            table_name = argus_id + '_unknown'
            # print(table_name)
            # print(dave_id,list_videos_name)
            # print(list_videos_name)
            # query=F'INSERT INTO "argus".\"{argus_id}_team\" VALUES (\"{emp_name}\",\"{emp_date}\",\"{emp_dep}\",\"{img_link}\");'
            # query=F'Insert Into \"argus\".\"{argus_id}_team\"  (name,join_date,department,photos) values (\"{emp_name}\",\"{emp_date}\",\"{emp_dep}\",\"{img_link}\");'

            try:
                query = '''insert into "argus"."{}" (argus_id,unknown_id,url,date_time) values (%s,%s,%s,%s);'''.format(
                    table_name)
                print(query)
                cursor.execute(query, (argus_id, unknown_ID, Url, date_time,))
                q_status = True
            except Exception as issue_in_video:
                logger.debug("_Issue & Skip this in Video")
                logger.debug("_Issue is {}", issue_in_video)
                # Skip this VIdeo Move Forward

            # return ArgusDB().get_all('''select * from "dave-alpha-build"."for_driver_score";''')
            # pass
        return q_status

    def add_team_memeber(self, argus_id, emp_name, emp_date, emp_dep, img_link):
        """
        Add a New Team Member

        param: argus_id,emp_name,emp_date,emp_dep,img_link,
        Return : If No Issue -> True or False


        """
        logger.info("Insert new_Video in for_driver_score in a Table")
        connection = self.create_connection()
        q_status = False
        if connection != False:
            cursor = connection.cursor()
            connection.autocommit = True
            table_name = argus_id + '_team'
            # print(dave_id,list_videos_name)
            # print(list_videos_name)
            # query=F'INSERT INTO "argus".\"{argus_id}_team\" VALUES (\"{emp_name}\",\"{emp_date}\",\"{emp_dep}\",\"{img_link}\");'
            # query=F'Insert Into \"argus\".\"{argus_id}_team\"  (name,join_date,department,photos) values (\"{emp_name}\",\"{emp_date}\",\"{emp_dep}\",\"{img_link}\");'

            try:
                query = '''insert into "argus"."{}" (emp_name,join_date,department,photos) values (%s,%s,%s,%s);'''.format(
                    table_name)
                cursor.execute(query, (emp_name, emp_dep, emp_date, img_link,))
                q_status = True
            except Exception as issue_in_video:
                logger.debug("_Issue & Skip this in Video")
                logger.debug("_Issue is {}", issue_in_video)
                # Skip this VIdeo Move Forward

            # return ArgusDB().get_all('''select * from "dave-alpha-build"."for_driver_score";''')
            # pass
        return q_status

    def add_notification(self, argus_id, activity_name, activity_detail, activity_status):
        """
        Add a New Team Member

        param: argus_id,emp_name,emp_date,emp_dep,img_link,
        Return : If No Issue -> True or False


        """
        logger.info("Insert new_Video in for_driver_score in a Table")
        connection = self.create_connection()

        activity_start_time = datetime.now().strftime("%Y_%m_%d__%H_%M")

        q_status = False
        if connection != False:
            cursor = connection.cursor()
            connection.autocommit = True
            table_name = argus_id + '_notification'
            # print(dave_id,list_videos_name)
            # print(list_videos_name)
            # query=F'INSERT INTO "argus".\"{argus_id}_team\" VALUES (\"{emp_name}\",\"{emp_date}\",\"{emp_dep}\",\"{img_link}\");'
            # query=F'Insert Into \"argus\".\"{argus_id}_team\"  (name,join_date,department,photos) values (\"{emp_name}\",\"{emp_date}\",\"{emp_dep}\",\"{img_link}\");'

            try:
                query = '''insert into "argus"."{}" (activity_name,activity_detail,activity_status,
                activity_start_time) values (%s,%s,%s,%s);'''.format(
                    table_name)
                cursor.execute(query, (activity_name, activity_detail, activity_status, activity_start_time,))
                q_status = True
            except Exception as issue_in_video:
                logger.debug("_Issue & Skip this in Video")
                logger.debug("_Issue is {}", issue_in_video)
                # Skip this VIdeo Move Forward

            # return ArgusDB().get_all('''select * from "dave-alpha-build"."for_driver_score";''')
            # pass
        return q_status

    def add_attendence(self, argus_id, photo_name, photo_url, name, date, time):
        """
        Add a New Attendance Entry In DB

        param: argus_id,emp_name,emp_date,emp_dep,img_link,
        Return : If No Issue -> True or False


        """
        logger.info("Insert new_Video in for_driver_score in a Table")
        connection = self.create_connection()
        q_status = False
        if connection != False:
            cursor = connection.cursor()
            connection.autocommit = True
            table_name = argus_id + '_attendance_entries'
            # print(dave_id,list_videos_name)
            # print(list_videos_name)
            # query=F'INSERT INTO "argus".\"{argus_id}_team\" VALUES (\"{emp_name}\",\"{emp_date}\",\"{emp_dep}\",\"{img_link}\");'
            # query=F'Insert Into \"argus\".\"{argus_id}_team\"  (name,join_date,department,photos) values (\"{emp_name}\",\"{emp_date}\",\"{emp_dep}\",\"{img_link}\");'

            try:
                query = '''insert into "argus"."{}" (photo_name,photo_url,name,date,time) values (%s,%s,%s,%s,%s);'''.format(
                    table_name)
                cursor.execute(query, (photo_name, photo_url, name, date, time,))
                q_status = True
            except UniqueViolation as e:
                logger.info("Duplicate Exist")
                print("Dublicate Exist")
                q_status = True
            except Exception as issue_in_video:
                logger.debug("_Issue & Skip this in Video")
                logger.debug("_Issue is {}", issue_in_video)
                # Skip this VIdeo Move Forward

            # return ArgusDB().get_all('''select * from "dave-alpha-build"."for_driver_score";''')
            # pass
        return q_status

    def get_all_attendance_entries(self, argus_id):
        """
        Show all the data from table query

        Parameter : query
        Return :
        ==> q_status = True -> its means New Table is Created / Or False -> New Table is not created
        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            cursor = connection.cursor()
            try:
                # This line look horror , Purpose for POSTGRE Wants Values must be Dual Quotes
                # Its Give a QUotes Using "ESCAPE SEQUENCE"
                query = F'select * from \"argus\".\"{argus_id}_attendance_entries\";'

                cursor.execute(query)
                result = cursor.fetchall()
                logger.info("Successfully Reading Data in a Table")

                return result

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status

    def get_only_known_attendance_entries(self, argus_id):
        """
        Show all the data from table query

        Parameter : query
        Return :
        ==> q_status = True -> its means New Table is Created / Or False -> New Table is not created
        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            cursor = connection.cursor()
            try:
                # This line look horror , Purpose for POSTGRE Wants Values must be Dual Quotes
                # Its Give a QUotes Using "ESCAPE SEQUENCE"
                query = F'select * from \"argus\".\"{argus_id}_attendance_entries\" where \"name\" not like \'unknow%\' ;'

                cursor.execute(query)
                result = cursor.fetchall()

                logger.info("Successfully Reading Data in a Table")
                list_result = []
                # for i in result:
                #     print(i)
                result = list(map(list, result))
                return result

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status

    def get_year_attendance_entries(self, argus_id, yyyy):
        """
        Show all the data from table query

        Parameter : query
        Return :
        ==> q_status = True -> its means New Table is Created / Or False -> New Table is not created
        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            cursor = connection.cursor()
            try:
                # This line look horror , Purpose for POSTGRE Wants Values must be Dual Quotes
                # Its Give a QUotes Using "ESCAPE SEQUENCE"
                query = F'select * from \"argus\".\"{argus_id}_attendance_entries\" where \"name\" not like \'unknow%\' and \"date\" like \'{yyyy}%\';'

                cursor.execute(query)
                result = cursor.fetchall()

                logger.info("Successfully Reading Data in a Table")
                list_result = []
                # for i in result:
                #     print(i)
                result = list(map(list, result))
                return result

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status

    def get_week_attendance_entries(self, argus_id, latest_sunday_date, today_date):
        """
        Show all the data from table query

        Parameter : query
        Return :
        ==> q_status = True -> its means New Table is Created / Or False -> New Table is not created
        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            cursor = connection.cursor()
            try:
                # This line look horror , Purpose for POSTGRE Wants Values must be Dual Quotes
                # Its Give a QUotes Using "ESCAPE SEQUENCE"
                query = F'select * from \"argus\".\"{argus_id}_attendance_entries\" where  \"name\" not like \'unknow%\' and \"date\" between \'{latest_sunday_date}\' and \'{today_date}%\' Order By \"date\" desc;'

                cursor.execute(query)
                result = cursor.fetchall()

                logger.info("Successfully Reading Data in a Table")
                list_result = []
                # for i in result:
                #     print(i)
                result = list(map(list, result))
                return result

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status

    def get_range_report(self, argus_id, old_date, new_data):
        return self.get_week_attendance_entries(argus_id, old_date, new_data)

    def get_month_attendance_entries(self, argus_id, yyyy, mm):
        """
        Show all the data from table query

        Parameter : query
        Return :
        ==> q_status = True -> its means New Table is Created / Or False -> New Table is not created
        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            cursor = connection.cursor()
            try:
                # This line look horror , Purpose for POSTGRE Wants Values must be Dual Quotes
                # Its Give a QUotes Using "ESCAPE SEQUENCE"

                query = F'select * from \"argus\".\"{argus_id}_attendance_entries\" where \"name\" not like \'unknow%\' and  \"date\" like \'{yyyy}/{mm}%\' order by date asc , time asc;'

                cursor.execute(query)
                result = cursor.fetchall()

                logger.info("Successfully Reading Data in a Table")
                list_result = []
                # for i in result:
                #     print(i)
                result = list(map(list, result))
                return result

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status

    def get_dbx_attendance_csv(self, argus_id):
        """
        Show all the data from table query

        Parameter : query
        Return :
        ==> q_status = True -> its means New Table is Created / Or False -> New Table is not created
        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            cursor = connection.cursor()
            try:
                # This line look horror , Purpose for POSTGRE Wants Values must be Dual Quotes
                # Its Give a QUotes Using "ESCAPE SEQUENCE"
                query = F'select * from \"argus\".\"{argus_id}_dbx_attendance_csv\";'

                cursor.execute(query)
                result = cursor.fetchall()
                logger.info("Successfully Reading Data in a Table")
                result = [i[0] for i in result]
                return result

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status

    def add_dbx_attendance_csv(self, argus_id, csv_file_name):
        """
        Add a New Attendance Entry In DBX Attendance CSV

        param:
        Return : If No Issue -> True or False


        """
        logger.info("Insert new_Video in for_driver_score in a Table")
        connection = self.create_connection()
        q_status = False
        if connection != False:
            cursor = connection.cursor()
            connection.autocommit = True
            table_name = argus_id + '_dbx_attendance_csv'
            # print(dave_id,list_videos_name)
            # print(list_videos_name)
            # query=F'INSERT INTO "argus".\"{argus_id}_team\" VALUES (\"{emp_name}\",\"{emp_date}\",\"{emp_dep}\",\"{img_link}\");'
            # query=F'Insert Into \"argus\".\"{argus_id}_team\"  (name,join_date,department,photos) values (\"{emp_name}\",\"{emp_date}\",\"{emp_dep}\",\"{img_link}\");'

            try:
                query = '''insert into "argus"."{}" (csv_file_name) values (%s);'''.format(
                    table_name)
                cursor.execute(query, (csv_file_name,))
                q_status = True
            except Exception as issue_in_video:
                logger.debug("_Issue & Skip this in Video")
                logger.debug("_Issue is {}", issue_in_video)
                # Skip this VIdeo Move Forward

            # return ArgusDB().get_all('''select * from "dave-alpha-build"."for_driver_score";''')
            # pass
        return q_status

    def add_static_csv(self, argus_id, report_id, report_name, url, report_status):

        """
        Add a New Attendance Entry In DBX Attendance CSV

        param:
        Return : If No Issue -> True or False


        """
        logger.info("Insert new_Video in for_driver_score in a Table")
        connection = self.create_connection()
        q_status = False
        if connection != False:
            cursor = connection.cursor()
            connection.autocommit = True
            table_name = argus_id + '_static_reports'
            # print(dave_id,list_videos_name)
            # print(list_videos_name)
            # query=F'INSERT INTO "argus".\"{argus_id}_team\" VALUES (\"{emp_name}\",\"{emp_date}\",\"{emp_dep}\",\"{img_link}\");'
            # query=F'Insert Into \"argus\".\"{argus_id}_team\"  (name,join_date,department,photos) values (\"{emp_name}\",\"{emp_date}\",\"{emp_dep}\",\"{img_link}\");'

            try:
                query = '''insert into "argus"."{}" (report_id,report_name,url,report_status) values (%s,%s,%s,%s);'''.format(
                    table_name)
                cursor.execute(query, (report_id, report_name, url, report_status,))
                q_status = True
            except Exception as issue_in_video:
                logger.debug("_Issue & Skip this in Video")
                logger.debug("_Issue is {}", issue_in_video)

        return q_status

    def get_report_id_static_csv(self, argus_id):
        """
        Show all the data from table query

        Parameter : query
        Return :
        ==> q_status = True -> its means New Table is Created / Or False -> New Table is not created
        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            cursor = connection.cursor()
            try:
                # This line look horror , Purpose for POSTGRE Wants Values must be Dual Quotes
                # Its Give a QUotes Using "ESCAPE SEQUENCE"
                query = F'select \"report_id\" from \"argus\".\"{argus_id}_static_reports\";'

                cursor.execute(query)
                result = cursor.fetchall()
                logger.info("Successfully Reading Data in a Table")
                result = [i[0] for i in result]
                return result

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status

    def get_static_report_csv(self, argus_id):
        """
        Show all the data from table query

        Parameter : query
        Return :
        ==> q_status = True -> its means New Table is Created / Or False -> New Table is not created
        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            cursor = connection.cursor()
            try:
                # This line look horror , Purpose for POSTGRE Wants Values must be Dual Quotes
                # Its Give a QUotes Using "ESCAPE SEQUENCE"
                query = F'select * from \"argus\".\"{argus_id}_static_reports\";'

                cursor.execute(query)
                result = cursor.fetchall()
                logger.info("Successfully Reading Data in a Table")
                print(result)
                report_id, report_name, report_url, report_status = zip(*result)
                return [list(report_id), list(report_name), list(report_url), list(report_status)]

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status

    def get_all_notification(self, argus_id):
        """
        Show all the data from table query

        Parameter : query
        Return :
        ==> q_status = True -> its means New Table is Created / Or False -> New Table is not created
        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            cursor = connection.cursor()
            try:
                # This line look horror , Purpose for POSTGRE Wants Values must be Dual Quotes
                # Its Give a QUotes Using "ESCAPE SEQUENCE"
                query = F'select * from \"argus\".\"{argus_id}_notification\" ORDER BY activity_id DESC;'

                cursor.execute(query)
                result = cursor.fetchall()

                logger.info("Successfully Reading Data in a Table")
                return result

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status

    def add_notification(self, argus_id, activity_name, activity_detail, activity_status):
        """
        Add a New Team Member

        param: argus_id,emp_name,emp_date,emp_dep,img_link,
        Return : If No Issue -> True or False


        """
        logger.info("Insert new_Video in for_driver_score in a Table")
        connection = self.create_connection()

        activity_start_time = datetime.now().strftime("%Y_%m_%d__%H_%M")

        q_status = False
        if connection != False:
            cursor = connection.cursor()
            connection.autocommit = True
            table_name = argus_id + '_notification'
            # print(dave_id,list_videos_name)
            # print(list_videos_name)
            # query=F'INSERT INTO "argus".\"{argus_id}_team\" VALUES (\"{emp_name}\",\"{emp_date}\",\"{emp_dep}\",\"{img_link}\");'
            # query=F'Insert Into \"argus\".\"{argus_id}_team\"  (name,join_date,department,photos) values (\"{emp_name}\",\"{emp_date}\",\"{emp_dep}\",\"{img_link}\");'

            try:
                query = '''insert into "argus"."{}" (activity_name,activity_detail,activity_status,
                   activity_start_time) values (%s,%s,%s,%s);'''.format(
                    table_name)
                cursor.execute(query, (activity_name, activity_detail, activity_status, activity_start_time,))
                q_status = True
            except Exception as issue_in_video:
                logger.debug("_Issue & Skip this in Video")
                logger.debug("_Issue is {}", issue_in_video)
                # Skip this VIdeo Move Forward

            # return ArgusDB().get_all('''select * from "dave-alpha-build"."for_driver_score";''')
            # pass
        return q_status

    # Customer Table Operations

    def get_site_AllArgus(self, customer_id):
        """
        Get Site_All_Argus

        Parameter : customer
        Return : dict
        ==> q_status = True -> its means New Table is Created / Or False -> New Table is not created
        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            cursor = connection.cursor()
            try:
                query = F'SELECT site_2 FROM argus.customer_table where customer_id={customer_id}; '

                cursor.execute(query)
                result = cursor.fetchone()
                # print(result)
                logger.info("Successfully Reading Data in a Table")
                if result is None:
                    return []
                return result[0]

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")

# Return in Dict
    def get_all_team_dict(self, argus_id):
        """
        Show all the Team Member emp_name,join_date,department,photos from table query

        Parameter : query
        Return :
        ==> q_status = [(),()]  Return Dictionary

        """
        connection = self.create_connection()
        # print("Connection Status is :",connection)
        logger.info("Reading Data in a Table")
        q_status = False

        if connection != False:
            result = None
            cursor = connection.cursor(cursor_factory=RealDictCursor)
            try:
                # This line look horror , Purpose for POSTGRE Wants Values must be Dual Quotes
                # Its Give a QUotes Using "ESCAPE SEQUENCE"
                query = F'select emp_name,join_date,department,photos  from \"argus\".\"{argus_id}_team\";'

                cursor.execute(query)
                result = cursor.fetchall()

                logger.info("Successfully Reading Data in a Table")
                return json.dumps(result)

            except OperationalError as e:
                print(f"The error '{e}' occurred")
                logger.info("Issue in Reading Data in a Table")
                logger.exception("Issue is")
        return q_status


if __name__ == '__main__':
    pass
    team_data_dict=ArgusDB().get_all_team_dict('Argus_101')
    print(team_data_dict)
    # print(ArgusDB().today_Known_Unknown('2023/04/29', 'Argus_104'))

