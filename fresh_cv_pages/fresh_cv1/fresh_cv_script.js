

  const allTabs = document.getElementsByClassName("tab");
  const previousBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('next_btn');
  const mother_form= document.getElementById('mother_form_container');
 





var currentTab = 0; 

function showTab (n) {
    console.log(" n  passed into", n);

  allTabs[n].style.display = "block";
  
  if (n == 0) {
    previousBtn.style.display = "none";
  } else {
    previousBtn.style.display = "flex";
  }
  if (n == (allTabs.length - 1)) {
    nextBtn.innerHTML = "Submit";
  } else {
    nextBtn.innerHTML = "Next";
  }
  
}
showTab(currentTab); 
const validateForm = () => {
  //   // This function deals with validation of the form fields
  //   var x, y, i, valid = true;
  //   x = document.getElementsByClassName("tab");
  //   y = x[currentTab].getElementsByTagName("input");
  //   console.log(y, "is here");
  //   console.log(valid);
  //   // A loop that checks every input field in the current tab:
  //   for (i = 0; i < y.length; i++) {
  //     // If a field is empty...
  //     if (y[i].value == "") {
  //       // add an "invalid" class to the field:
  //       y[i].placeholder='Sorry! you have not Filled This';
  //       y[i].className += " invalid";
  
        
  //       // and set the current valid status to false
  //       valid = false;
  
  //     }
  //   }
  //   // If the valid status is true, mark the step as finished and valid:
  // //   if (valid) {
  // //     document.getElementsByClassName("step")[currentTab].className += " finish";
  // //   }
  valid = true
    return valid; // return the valid status
  }

function  nextPrev (n) {
 console.log("initial n ", n);
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  allTabs[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  console.log("added n ", n);
  // if you have reached the end of the form...
  if (currentTab >= allTabs.length) {
    // ... the form gets submitted:
    mother_form.submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
  
}






function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}






// Nav bar script
function toggleMenu() {
  console.log((document.getElementById("mob_menu").style.transform))
  if (document.getElementById("mob_menu").style.transform != "translateX(0vw)"){
      document.getElementById("mob_menu").style.transform = "translateX(0vw)"
  }
  else if(document.getElementById("mob_menu").style.transform === "translateX(0vw)"){
      document.getElementById("mob_menu").style.transform = "translateX(90vw)"
  }
}








// Add More details functions /////////////////////////////////////////////


var skillArray = [];
var schoolArray = [];
var workArray = [];
var jobArray = [];



//form 2/// FOR WORK HISTORY///////////////////////////

function createWorks() {
  
workArray.push({
  start_date: document.getElementById("start_date_id").value,
  end_date: document.getElementById("end_date_id").value,
  employer: document.getElementById("employer_id").value,
  job_title: document.getElementById("job_title_id").value,
  country: document.getElementById("country_id_form_2").value,
  city: document.getElementById("city_id_form_2").value,
  current_work: document.getElementById("work_here_status").value,
});
workArray.map((item, index)=>{
  const work_details_node = document.createElement('div');
  const markup = `
  
  <div class="form_2_card_cousins">
  <div class="form_2_added_details_card">
    <div class="added_details_left">
      <h4>Work History ${index+1}</h4>
      <div class="added_details_desc">
        <p><span>Job Title:</span> ${item.job_title}</p>
        <p><span>Employer:</span>  ${item.employer}</p>
        <p><span>City:</span> ${item.city} </p>
        <p><span>Country:</span> ${item.country}</p>
        <p> <span>Start Date:</span>${item.start_date}</p>
        <p> <span>End Date:</span>${item.end_date}</p>
        <p> <span> I currently work there:</span>${item.current_work}</p>
        
      </div>
    </div>
    <div class="added_details_right">
      <button  id='added_details_form_2_click' class="added_details_edit_btn_form_2">Edit <i class="fa-solid fa-pen-to-square"></i></button>
    </div>
  </div>
</div>

  `
  work_details_node.innerHTML = markup;
  document.getElementById("form_2_add_details").append(work_details_node);

  //set inputs to empty string
   document.getElementById("job_title_id").value = " ";
   document.getElementById("employer_id").value = " ";
   document.getElementById("city_id_form_2").value = " ";
   document.getElementById("country_id_form_2").value = " ";
   document.getElementById("start_date_id").value = " ";
   document.getElementById("end_date_id").value = " ";
   document.getElementById("work_here_status").value = " ";
   



   document.getElementById('form_2_add_details').style.display='block';
})
console.log(workArray);
}


//form 3/// FOR JOB DESCRIPTION///////////////////////////
const jobDescContainer = document.getElementById('job_desc_div');

function createJobDescr() {
jobArray.push({
  description: document.getElementById("job_description_input_id").value,
});
jobArray.map((item)=>{
  const node =document.createElement('p');
  const textnode = item.description
  node.innerHTML = textnode;
  document.getElementById("job_desc_div").append(node);
   document.getElementById("job_description_input_id").value = " ";
   document.getElementById('job_desc_div_container').style.display='block';

})

console.log(jobArray);
}



// form 4 /////////// FOR EDUCATION/////////////////////////

function createSchoolData (){
  schoolArray.push({
    school_name:document.getElementById('school_name_id').value,
    field_study:document.getElementById('field_study_id').value,
    degree:document.getElementById('degree_type_id').value,
    city:document.getElementById('city_id_form_4').value,
    country:document.getElementById('country_id_form_4').value,
    start_date:document.getElementById('start_date_form_4_id').value,
    end_date:document.getElementById('end_date_form_4_id').value,
    current_school:document.getElementById('current_school').value,


  })

  schoolArray.map((item, index)=>{
    const school_details_node = document.createElement('div');
    const markup=`
    <div class="form_4_card_cousins">
    <div class="form_4_added_details_card">
      <div class="added_details_left">
        <h4>Education ${index+1} </h4>
        <div class="added_details_desc">
          <p><span>School name:</span> ${item.school_name}</p>
          <p><span>Field of study:</span>  ${item.field_study}</p>
          <p><span>Degree:</span> ${item.degree} </p>
          <p><span>City:</span> ${item.city}</p>
          <p><span>Country:</span> ${item.country}</p>
          <p> <span>Start Date:</span>${item.start_date}</p>
          <p> <span>End Date:</span>${item.end_date}</p>
          <p> <span> I currently school there:</span>${item.current_school}</p>
          
        </div>
      </div>
      <div class="added_details_right">
        <button  id='added_details_form_4_click' class="added_details_edit_btn_form_4">Edit <i class="fa-solid fa-pen-to-square"></i></button>
      </div>
    </div>
  </div> 
    `

    school_details_node.innerHTML=markup;

    document.getElementById("form_4_add_details").append(school_details_node)



       //set inputs to empty string
       document.getElementById("school_name_id").value = " ";
       document.getElementById("field_study_id").value = " ";
       document.getElementById("degree_type_id").value = " ";
       document.getElementById("city_id_form_4").value = " ";
       document.getElementById("country_id_form_4").value = " ";
       document.getElementById("start_date_form_4_id").value = " ";
       document.getElementById("end_date_form_4_id").value = " ";
       document.getElementById("current_school").value = " ";
       
   
       document.getElementById('form_4_add_details').style.display='block';
  })



 
 

  console.log(schoolArray);
}

const skillArrya = []

// form 5 /////////// FOR skill/////////////////////////

var skill_lists = document.getElementById("skill_list_id");
      const skill = document.createElement("ul");
      skill.id="skillUlId"
      // skill_lists.append(skill);

console.log(skill.id)


function createSkillsData() {
  

  skillArray.push({skill: document.getElementById('skills_cert_id').value});
  const skillLi = document.createElement("li");
  skillLi.className ="skill_list"
  skillArray.map((item, index) => {

    const newSkill = `
    <p>${item.skill.substring(0, 20)}</p>
    <button  id='added_details_form_3_click' class="added_details_edit_btn_form_3">Remove <i class="fa-solid fa-pen-to-square"></i></button>
    `;
    skill.append(skillLi)
    skillLi.innerHTML = newSkill;
    skill_lists.append(skill);
  document.getElementById("skills_cert_id").value = " ";
  });

  document.getElementById('skills_cert_div_container').style.display='block'
 

  console.log(skillArray);
}



