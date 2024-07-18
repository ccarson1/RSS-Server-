# RSS-Server
RSS Server interface to update the rss feeds for a magic mirror


# How to start?
1. Click Code > download.zip
2. Extract zip folder
3. Open a cmd console in the extracted folders location. You should see the files and folders (static, templates, rss_server.py)
5. !Make sure that python is installed!: python --version
6. Create a python environment: python -m venv env. You may have to use (py, py3 or python3) if it doesn't work. 
8. Start the python environment: python env\Scripts\activate
9. Install flask: pip install flask
11. Make sure you are in the same directory as the rss_server.py
12. Run flask server: flask --app rss_server --debug run
13. Open the browser and go to (http://127.0.0.1:5000/admin)



#Sample Image
![image](https://github.com/user-attachments/assets/bb7af3b2-66fe-402f-ab3f-4d9474e30b07)


