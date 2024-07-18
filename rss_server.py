
from flask import Flask 
from flask import render_template 
from flask import request
from flask import jsonify
import os
  
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

@app.route('/admin', methods=['GET', 'POST'])
def admin():
    
    if request.method == 'POST':
        file_name = request.headers.get('X-Filename')
        if not file_name:
            return jsonify({'error': 'No filename provided'}), 400

        file_data = request.data
        if not file_data:
            return jsonify({'error': 'No file data provided'}), 400

        file_path = os.path.join('./uploads', file_name)
        os.makedirs(os.path.dirname(file_path), exist_ok=True)  # Ensure the directory exists
        with open(file_path, 'wb') as f:
            f.write(file_data)

        return jsonify({'message': 'File uploaded successfully!'}), 200

    items = ["game.xml", "meetings.xml"]

    return render_template('admin.html', items=items)
  
# run the application 
if __name__ == "__main__": 
    app.run(debug=True)