# Import smtplib for the actual sending function
import smtplib

# Import the email modules we'll need
from email.message import EmailMessage


def sendEmail(msgString):
    msg = EmailMessage()
    msg.set_content(msgString)

    # me == the sender's email address
    # you == the recipient's email address
    msg['Subject'] = 'Test send mail with Python'
    msg['From'] = 'klas0holmgren@gmail.com'
    msg['To'] = 'klas0holmgren@gmail.com'

    # Send the message via our own SMTP server
    s = smtplib.SMTP(host='smtp.gmail.com', port=587)
    s.ehlo()
    s.starttls()
    s.login('klas0holmgren@gmail.com', 'passWord')
    s.send_message(msg)
    s.quit()