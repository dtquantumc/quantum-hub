import time
from flask import Flask, render_template, request
import os

# D-Wave Imports
from dwave.cloud import Client
from dwave.system import DWaveSampler

# D-Wave Code Example Imports
from nurse_scheduling_master import nurse_scheduling
from sudoku_master import sudoku

app = Flask(__name__, static_folder='./build', static_url_path='/')


@app.route('/test_server', methods=['GET', 'POST'])
def test_server():
    raw_data = request.get_json()

    # results = {'test': 'complete', 'token': raw_data['token']}
    if request.method == 'POST':
        endpoint = 'https://cloud.dwavesys.com/sapi/'
        token = raw_data['token']
        client = 'qpu'
        solver = 'DW_2000Q_6'
        sampler = DWaveSampler(client=client,
                               endpoint=endpoint,
                               token=token,
                               solver=solver)

        if raw_data['typeOfProblem'] == 'nurseScheduling':
            results = str(nurse_scheduling.main(token=token,
                                                qpu_sampler=sampler))
        else:
            results = sudoku.main(qpu_sampler=sampler)

    return results

@app.route('/')
def my_index():
    return app.send_static_file('index.html')


@app.route('/app/')
@app.route('/app/<string:game>')
def app_page(game):
	print(game)
	return app.send_static_file("index.html")

if __name__ == '__main__':
    # Run Flask App
    port = int(os.getenv('PORT', 5000))
    print(port)
    app.run(debug=True, host='0.0.0.0', port=port)


@app.route('/api_token', methods=['GET', 'POST'])
def set_api_token():
    return {'given_token': request.get_json()['token']}
