let dailySchedule

//TimeInterval Render for the hero and schedule-color
let timeRender = setInterval(function(){
    var hourNow = Number(moment().format('H'))
    for(var i=0;i<$('input').length;i++){
        var timeBox = Number($('input').eq(i).data('time'))
        if(hourNow >= 9){
            if(timeBox === hourNow){
                $('input').eq(i).addClass('present')
                $('input').eq(i).prop("disabled", false)
                $('button').eq(i).prop("disabled", false)
            }else if (timeBox < hourNow){
                $('input').eq(i).addClass('past')
                $('input').eq(i).prop("disabled", true)
                $('button').eq(i).prop("disabled", true)
            }else{
                $('input').eq(i).addClass('future')
                $('input').eq(i).prop("disabled", false)
                $('button').eq(i).prop("disabled", false)
            }
        }else{
            $('input').eq(i).addClass('future')
            $('input').eq(i).prop("disabled", false)
            $('button').eq(i).prop("disabled", false)
        }
    }
    
    $('#currentDay').text(moment().format('[Today is ] dddd, MMM Do YYYY [. Current time: ]HH:MM:ss'))
}, 10)

//Render schedule function when page refresh or clear button clicked
function renderSchedule(){
    //Check if local store strage has dailySchedule
    if(localStorage.getItem("dailySchedule")  !== null){
        //If yes then parse it into dailySchedule variable
        dailySchedule=JSON.parse(localStorage.getItem('dailySchedule'))
        //Check if the variable has timestamp on
        if(dailySchedule.hasOwnProperty('day')){
            //Check if the timestamp is the same as local storage
            if(dailySchedule['day'] === moment().format('YYYYMMD')){
                //If yes, then render the dailySchedule to the page
                for(var i=0; i<$('input').length; i++){
                    if(dailySchedule.hasOwnProperty($('input').eq(i).data('time'))){
                        $('input').eq(i).val(dailySchedule[$('input').eq(i).data('time')])
                    }else{
                        $('input').eq(i).val('')
                    }
                }
            }else{
                //If not, it means the info is not up-to-date
                //clear the localstorage
                localStorage.removeItem('dailySchedule')
            }
        }
        ////If localstorage does not have a timestamp but has info inside
        ////This circumstance will never happen. 
        ////Time will always be stamped if page refresh or clear button clicked
        // else{         
        //     dailySchedule={day:moment().format('YYYYMMD')}
        //     localStorage.setItem('dailySchedule', JSON.stringify(dailySchedule))//1
        // }
    }
    //Check if localstorage is empty and put timestamp on it
    if(localStorage.getItem("dailySchedule")  === null){
        //If Local storage is empty
        dailySchedule={day:moment().format('YYYYMMD')}
        localStorage.setItem('dailySchedule', JSON.stringify(dailySchedule))//2
        for(var i=0; i<$('input').length; i++){
            $('input').eq(i).val('')
        }
    }

    console.log(localStorage.getItem('dailySchedule'))
}

//Click event to storage schedule
$('.row').on('click', 'button', e => {
    //Getting keys from the input data attr and value from the input value
    var key = $(e.target).parent().siblings(":last").data('time')
    var value = $(e.target).parent().siblings(":last").val()
    //Dailyschedule can always be parsed from localstorage, will never equals null
    //Will at least have a timestamp on the daily schedule
    dailySchedule = JSON.parse(localStorage.getItem('dailySchedule'))
    dailySchedule[key] = value
    //Storage dailySchedule back to local storage
    localStorage.setItem('dailySchedule', JSON.stringify(dailySchedule))
})

//Manually clear today's schedule
$('#clearBtn').on('click', e => {
    localStorage.removeItem('dailySchedule')
    renderSchedule()
})

//Render Schedule when page loads
renderSchedule()

