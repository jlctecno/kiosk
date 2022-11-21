readData(); 
//initiate first read without any delay so we don't get blank fields on load. 
//You can also call this from 'body onLoad', but I prefer to keep my javascript stuff in one file, for many reasons 
function readData() { 
    //ajax GET request to load the data.xml into xmlcontents var 
    $.get('data/values2.xml', function(xmlcontents) { 
                //you can read jQuery docs to understand the syntax of the next line
                //but in summary you have a local object directly named localdynvar1 so you can access it using # prefix
                //.find() searches for an XML tag, which in our case are xml_tag1, xml_tag2
                //hour-values
                $('#HourName').html($(xmlcontents).find('HourName').text());
                $('#FirstHourName').html($(xmlcontents).find('FirstHourName').text());
                $('#t5MinFractionName').html($(xmlcontents).find('t5MinFractionName').text());
                $('#t12HoursName').html($(xmlcontents).find('t12HoursName').text());
                $('#t24HoursName').html($(xmlcontents).find('t24HoursName').text());
                //auto-values
                $('#autoName').html($(xmlcontents).find('autoName').text());
                $('#autoHour').html($(xmlcontents).find('autoHour').text());
                $('#autoFirstHour').html($(xmlcontents).find('autoFirstHour').text());
                $('#auto5MinFraction').html($(xmlcontents).find('auto5MinFraction').text());
                $('#auto12Hours').html($(xmlcontents).find('auto12Hours').text());
                $('#auto24Hours').html($(xmlcontents).find('auto24Hours').text());
                //pickup-values
                $('#pickupName').html($(xmlcontents).find('pickupName').text());
                $('#pickupHour').html($(xmlcontents).find('pickupHour').text());
                $('#pickupFirstHour').html($(xmlcontents).find('pickupFirstHour').text());
                $('#pickup5MinFraction').html($(xmlcontents).find('pickup5MinFraction').text());
                $('#pickup12Hours').html($(xmlcontents).find('pickup12Hours').text());
                $('#pickup24Hours').html($(xmlcontents).find('pickup24Hours').text());
                //moto-values
                $('#motoName').html($(xmlcontents).find('motoName').text());
                $('#motoHour').html($(xmlcontents).find('motoHour').text());
                $('#motoFirstHour').html($(xmlcontents).find('motoFirstHour').text());
                $('#moto5MinFraction').html($(xmlcontents).find('moto5MinFraction').text());
                $('#moto12Hours').html($(xmlcontents).find('moto12Hours').text());
                $('#moto24Hours').html($(xmlcontents).find('moto24Hours').text());
                //bici-values
                $('#biciName').html($(xmlcontents).find('biciName').text());
                $('#biciHour').html($(xmlcontents).find('biciHour').text());

        //obviouslly for large amounts of data or grouped/array format, you may want to use for...next here
        //to simplify the display and to shorten the amount of code used.  From here on, it's just programming techniques.
});
//don't use setInterval here without canceling the previous timer first.
setTimeout("readData()", 5000);
//you can use setTimeout or setInterval to read the contents of the XML again in, ie, 5 seconds
}