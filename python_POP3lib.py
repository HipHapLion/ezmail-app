import socket
import ssl

def getUsername(username):
    username = username + '\r\n'
    return username

def getPassword(password):
    password = password + '\r\n'
    return password

def popSession(popService, port, username, password):
    popSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    popSocket.connect((popService, port))

    popSocket = ssl.wrap_socket(popSocket)

    print((popSocket.recv(1024)).decode())

    popSocket.send(("USER " + getUsername(username)).encode())
    print(popSocket.recv(1024).decode())

    popSocket.send(("PASS " + getPassword(password)).encode())
    print(popSocket.recv(1024).decode())

    popSocket.send(("STAT\r\n").encode())
    print(popSocket.recv(1024).decode())

    # uncomment below code for the listings of all your emails
    popSocket.send(("LIST\r\n").encode())
    print(popSocket.recv(1024).decode())

    # popSocket.send(("RETR 4\r\n").encode())
    # print(popSocket.recv(1024).decode())
    
    popSocket.send(("TOP 4 100\r\n").encode())
    print(popSocket.recv(1024).decode())

    # popSocket.send(("DELE 4\r\n").encode())
    # print(popSocket.recv(1024).decode())

    popSocket.send(("QUIT\r\n").encode())
    print(popSocket.recv(1024).decode())

    popSocket.close()
