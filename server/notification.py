import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

smtp_server = "smtp.gmail.com"
smtp_port = 587

sender_email = "alphaarmyrecruitment@gmail.com"
sender_password = "hurl qidq gsif mrof"

class Email:
    def __init__(self):
        self.message = MIMEMultipart()
        self.ConnectServer()

    def ConnectServer(self):
        print("Attempting to connect to server ....")
        self.server = smtplib.SMTP(smtp_server, smtp_port)
        self.server.starttls()
        self.server.login(sender_email, sender_password)
        print("Connection Sucessfully established")

    def sendResults(self, email, message):
        message = f"""
        {message}\n
        For any inquiry contact: alphaarmyrecruitment@gmail.com
        Or Call: 1234567890
        """
        self.message["From"] = sender_email
        self.message["To"] = email
        self.message["Subject"] = "RESULTS @ ARMY RECRUITMENT"
        self.message.attach(MIMEText(message, "plain"))
        self.server.sendmail(sender_email, email, self.message.as_string())
        self.server.quit()

# x = Email()
# x.sendResults("machariaandrew1428@gmail.com", "HI")