from database_connection import ArgusDB
import ist_time_zone as ist


def total_emp(argus_id):
    count_teamMeber = ArgusDB().count_teamMember(argus_id)
    return int(count_teamMeber)


def jsonTodayMetric(argus_id):
    try:
        if "Argus" in argus_id:
            # old Flow Which Means "Argus_101" & "Argus_102" Series...
            # Its Dbx Folder  "Argus_101" & "Argus_102"
            # print("Argus_Id",argus_id)
            pass

        else:
            # New Multi Argus Means "101","102" Series
            # Its Dbx Folder  "101" & "102"
            argus_id = argus_id[:4]

        count_total_teamMember = total_emp(argus_id)
        print("Count Total Team Members ", count_total_teamMember)

        today_date = ist.get_IST_today_date()
        count_today_known_Unknown = ArgusDB().today_Known_Unknown(today_date, argus_id)
        print(count_today_known_Unknown)

        today_absent = int(count_total_teamMember) - int(count_today_known_Unknown[1])
        print(today_absent)

        # today_Known_Unknow
    
        return {
            'totalTeamMember': count_total_teamMember,
            'todayKnownMember': count_today_known_Unknown[1],
            'todayUnknownMember': count_today_known_Unknown[0],
            'todayAbsentMemeber': today_absent
        }
    except Exception as E:
        print("Error In JsonTodayMetric")
        return {
            'totalTeamMember': 404,
            'todayKnownMember': 404,
            'todayUnknownMember': 404,
            'todayAbsentMemeber': 404
        }


if __name__ == '__main__':
    # total_emp('Argus_101')
    dict_data = jsonTodayMetric('Argus_104')

    print(dict_data)

    # total_emp('Argus_103')