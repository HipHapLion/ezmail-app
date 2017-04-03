import sys, json
from python_SMTPlib import *
#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    # Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

def main():
    #get our data as an array from read_in()
    lines = read_in()

    sender = lines[0]
    sys.stdout.write(sender)
    rcpt = lines[1]
    subject = lines[2]
    msg = lines[3]
    emailService = lines[4]
    port = lines[5]
    username = lines[6]
    password = lines[7]

    smtpSession(sender, rcpt, subject, msg, emailService, port, username, password)

# Start process
if __name__ == '__main__':
    main()