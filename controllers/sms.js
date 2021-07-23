var request = require('request');

exports.getMobileNumber = async(mobileNumber) => {
    var sender = mobileNumber;

while (sender.charAt(0) === '+') {
sender = sender.substring(1);
}
while (sender.charAt(0) === '9') {
sender = sender.substring(1);
}
while (sender.charAt(0) === '4') {
sender = sender.substring(1);
}


while (sender.charAt(0) === '0') {
sender = sender.substring(1);
}
while (sender.charAt(0) === '+') {
sender = sender.substring(1);
}
while (sender.charAt(0) === '9') {
sender = sender.substring(1);
}
while (sender.charAt(0) === '4') {
sender = sender.substring(1);
}

var realSender="94"+sender;
return realSender;
  };

  exports.senderSms=async(message,mobile)=>{
     this.getMobileNumber(mobile).then(newMobileNumber=>{
        var options = {

            'method': 'POST',
            'url': 'https://app.newsletters.lk/smsAPI?sendsms&apikey=ICcenN1YgHUTYB9vpGzSE8KlEDt6f5xd&apitoken=JIMA1584899484&from=DEMO_SMS&to='+newMobileNumber+'&type=sms&text='+message,



        };
        request(options, function(error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
        })
     })
   
    
     return 1;

  }