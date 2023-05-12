from datetime import datetime
import dropbox
from dropbox import Dropbox
import datetime
import dbx_file_address as dfa


import dbx_token

dbx = dbx_token.dropbox_access_token()

exist_file_name = []
"""
try:
    for entry in dbx.files_list_folder("/Argus_Status/").entries:
        dbx_file=entry.name
        if dbx_file == 'heartbeat.txt':
            exist_file_name.append(entry.name)

except Exception as e:
    print("error here"+str(e))
# print(exist_file_name)
"""


def uct_to_ist(latest_file_time):
    # print("Last File Upload in minute ago", latest_file_time)
    time_change = datetime.timedelta(hours=5, minutes=30)
    new_time = latest_file_time + time_change
    # print(new_time)
    current_time = datetime.datetime.now()
    current_time = current_time + datetime.timedelta(hours=5, minutes=30)
    diff_minute = ((current_time - new_time).total_seconds() // 60)

    return diff_minute


def check_heartbeat(folder_id):
    dbx_file_path = dfa.dbx_status(folder_id)
    # print(dbx_file_path)
    latest_file_time = 0
    try:
        for entry in dbx.files_list_folder(dbx_file_path).entries:
            dbx_file = entry.name
            if entry.name == 'heartbeat.txt':
                latest_file_time = entry.client_modified

        """
        current_time = datetime.datetime.now()
        diff = current_time - latest_file_time
        diff_minutes = diff.seconds // 60
        diff_minutes = diff_minutes - 330
        # Convert UTC to IST TimeZone
        """

        # print("Last File Upload in minute ago", latest_file_time)
        time_change = datetime.timedelta(hours=5, minutes=30)
        new_time = latest_file_time + time_change
        # print(new_time)
        current_time = datetime.datetime.now()
        current_time = current_time + datetime.timedelta(hours=5, minutes=30)
        diff_minute = ((current_time - new_time).total_seconds() // 60)

        # print(new_time)
        return int(diff_minute)

    except Exception as e:

        return 404



def check_status(lastActive):
    if lastActive == 404:
        return {
            "status": 404,
            "lastActive": 404
        }

    elif lastActive <= 5:
        return {
            "status": "ON",
            "lastActive": lastActive
        }
    else:
        return {
            "status": "OFF",
            "lastActive": lastActive
        }


# def check_heartbeat2(customer_id):
#     dbx_file_path = dfa.dbx_status(customer_id)
#     all_device={}
#     # print(dbx_file_path)
#     latest_file_time = 0
#     try:
#         for entry in dbx.files_list_folder(dbx_file_path).entries:
#             dbx_file = entry.name
#             if  "heartbeat__"+customer_id in entry.name:
#                 latest_file_time = entry.client_modified
#                 print(dbx_file[-13:-4])

#                 diff_minute=uct_to_ist(latest_file_time)
#                 status=check_status(diff_minute)
#                 all_device[dbx_file[-13:-4]]=status

#         """
#         current_time = datetime.datetime.now()
#         diff = current_time - latest_file_time
#         diff_minutes = diff.seconds // 60
#         diff_minutes = diff_minutes - 330
#         # Convert UTC to IST TimeZone
#         """
#     except Exception as e:
#         print(e)
#         return 404


#     print(all_device)
#     # print(new_time)
#     return int(diff_minute)


def check_heartbeat2(argus_id):
    customer_id = argus_id[:4]
    print("Customer_id ", customer_id)
    dbx_file_path = dfa.dbx_status(customer_id)
    print(dbx_file_path)
    latest_file_time = 0
    for entry in dbx.files_list_folder(dbx_file_path).entries:
        dbx_file = entry.name
        print(dbx_file, type(dbx_file))
        print(argus_id, type(argus_id))
        if str(argus_id) in dbx_file:
            print('heartbeat__' + str(argus_id))
            latest_file_time = entry.client_modified
            break
        else:
            print('Not Found')
    try:

        """
        current_time = datetime.datetime.now()
        diff = current_time - latest_file_time
        diff_minutes = diff.seconds // 60
        diff_minutes = diff_minutes - 330
        # Convert UTC to IST TimeZone
        """

        # print("Last File Upload in minute ago", latest_file_time)
        time_change = datetime.timedelta(hours=5, minutes=30)
        new_time = latest_file_time + time_change
        # print(new_time)
        current_time = datetime.datetime.now()
        current_time = current_time + datetime.timedelta(hours=5, minutes=30)
        diff_minute = ((current_time - new_time).total_seconds() // 60)

        # print(new_time)
        return int(diff_minute)
    except Exception as e:
        print("Error Occurs", e)
        return 404


def jsonDeviceStatus(argus_id):
    print(argus_id)
    if "Argus" in argus_id:
        # old Flow Which Means "Argus_101" & "Argus_102" Series...
        # Its Dbx Folder  "Argus_101" & "Argus_102"
        print("Argus_Id", argus_id)
        lastActive = check_heartbeat(argus_id)
        print(lastActive)
    else:
        # New Multi Argus Means "1001","1002" Series
        # Its Dbx Folder  "1001" & "1002"
        print("New Multi_Cam Series")
        print("Argus_ID", argus_id)
        lastActive = check_heartbeat2(argus_id)
        print(lastActive)

    if lastActive == 404:
        return {
            "status": 404,
            "lastActive": 404
        }

    elif lastActive <= 5:
        return {
            "status": "ON",
            "lastActive": lastActive
        }
    else:
        return {
            "status": "OFF",
            "lastActive": lastActive
        }


if __name__ == '__main__':
    pass
    # print(jsonDeviceStatus('Argus_101'))
    print(check_heartbeat2('101101102'))