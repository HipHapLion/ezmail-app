import sys, json
from python_POP3lib import *
#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    # Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

def main():
    #get our data as an array from read_in()
    lines = read_in()

    popService = lines[0]
    port = lines[1]
    username = lines[2]
    password = lines[3]

    popSession(popService, port, username, password)

# Start process
if __name__ == '__main__':
    main()