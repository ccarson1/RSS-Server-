
from flask import Flask 
from flask import render_template 
  
# creates a Flask application 
app = Flask(__name__) 
  
  
@app.route("/") 
def hello(): 
    message = "Hello, World"
    return render_template('custom.xml',  
                           message=message) 

@app.route("/feed")
def feed():
    return render_template('game.xml')

@app.route("/admin")
def admin():
    return render_template('admin.html')
  
# run the application 
if __name__ == "__main__": 
    app.run(debug=True)