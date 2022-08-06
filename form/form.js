$('.container_form--lesson').click(function(){
   $(this).toggleClass('focusLesson'); 
})

let name=document.querySelector('#name');
let gender=document.querySelector('#gender');
let phone=document.querySelector('#phone');
let email=document.querySelector('#email');
let level=document.querySelector('#level');
let job=document.querySelector('#job');
let reason=document.querySelector('#reason');
function init(){
      name.value='';
      gender.value='';
      phone.value='';
      email.value='';
      level.value='';
      job.value='';
      reason.value='';
    }

$("#submitBtn").click(function(){
  let name=$('#name').val();
  let gender=$('#gender').val();
  let phone=$('#phone').val();
  let email=$('#email').val();
  let level=$('#level').val();
  let job=$('#job').val();
  let reason=$('#reason').val();
  let lesson=[];
  $('.container_form--lesson.focusLesson').each(function(){
    lesson.push($(this).text());
  })
  console.log(name,gender,phone,email,level,job,reason,lesson);
  
 
  if(name=="" ||phone=="" ||email==""||gender==undefined ||level==null ||job==null ||reason==[] ||lesson==[]){
    $('input').addClass('focus');
    $('select').addClass('focus');
    $('.form_required').addClass('active');
    $('div #lesson').addClass('focus');
    alert('您的表單未完成！');
  }

  else{
    // $('input').removeClass('focus');
    // $('select').removeClass('focus');
    // $('div #lesson').removeClass('focus');
    // $('.form_required').removeClass('active');


    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbwhapTQ5q5Cte8rHYMmWgEQuFrxmUNro9xNjXydz35W17nrNaxh3hUn42_1RvukGDkbtA/exec",
      
      data: {
        "name": name,
        "gender": gender,
        "phone": phone,
        "email": email,
        "level": level,
        "job": job,
        "reason": reason,
        "lesson": lesson.toString(),
      },
      success: function(response){
        if (response == "成功") {
        alert("表單填寫成功，已送出");
        }
        
        $('input').removeClass('focus');
        $('select').removeClass('focus');
        $('div #lesson').removeClass('focus').removeClass('focusLesson');
        $('.form_required').removeClass('active');

        init();
      }
      
    })
   }
})