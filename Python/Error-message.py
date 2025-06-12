from flask import Flask, render_template
app = Flask(__name__, template_folder ='~/SIS_New/HTML')

@app.route('/')
def index():
    return render_template('index.html')

# Custom 404 error handler
@app.errorhandler(404)
def not_found_error(error):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True)