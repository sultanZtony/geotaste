import discogs_client
import psycopg2
import progressbar

conn = psycopg2.connect(
    database="geotaste_db",
    user='geotaste_user',
    password='geotaste_pw',
    host='localhost',
    port='5432'
  )

d = discogs_client.Client('ExampleApplication/0.1', 
                          user_token="mfLWiejDiucWYTrCmJWFBoktMYZzKKJtQhgsbBpC"
                          )

index = 0
conn.autocommit = True
cursor = conn.cursor()

cursor.execute("SELECT label_name FROM label_geo")
result = [r[0] for r in cursor.fetchall()]
print(result)

id_list = {}
# for name in result:
#     search = d.search(name, type='label', per_page=1, page=1)
#     if len(search) != 0:
#         id_list[name] = (search[0].id)
#     index += 1
#     if(index % 5 == 0):
#         for name in id_list.keys():
#             sql = "UPDATE label_geo SET label_id=(label_id) WHERE label_name=(label_name)"
#             data = (str(id_list[name]), name)
#             cursor.execute(sql, data)
#         id_list = {}

with progressbar.ProgressBar(max_value=2946) as bar:
    for name in result:
        search = d.search(name, type='label', per_page=1, page=1)
        if len(search) != 0:
            id_list[name] = (search[0].id)
        index += 1
        bar.update(index)
        if(index % 5 == 0):
            sql = "UPDATE label_geo SET label_id=%s WHERE label_name=%s;"
            for name in id_list.keys():
                print(name + " " + str(id_list[name]))
                data = (str(id_list[name]), name)
                cursor.execute(sql, data)
                bar.update(index)
            id_list = {}
with progressbar.ProgressBar(max_value=2946) as bar:
    for name in id_list.keys():
        cursor.execute("UPDATE label_geo SET label_id= " + str(id_list[name]) + " WHERE label_name =" + name + "'")
        bar.update(index)
