"use strict"
function print(...args){
	args.forEach(
(item)=>{
	console.log(item);
}
		)
}
class Admin{
		constructor(_name,_department,_post,_workExperience){
		this.name=_name;
		this.department=_department;
		this.post=_post;
		this.workExperience=_workExperience;
		this.jobs=['networking','fullStack','database','itSecurity'];
	}
	get mainJobs () {
		return this.jobs;
	}
	set mainJobs(newElement){
		this.jobs.push(newElement);
	}
	salaryList(){
		let salary={
			networking:'80,000',
			fullStack:'1,40,000',
			database:'1,00,000',
			itSecurity:'1,20,000',
			softwareengineer:'1,50,000',
			tester:'60,000',
			technicalengineer:'45,000'
		};
		return salary;
	}
	salaryInText(){
		let deptSalary1=this.salaryList()[`${this.department}`];
		let postSalary1=this.postSalary()[`${this.post}`];
		let sum=Number(deptSalary1.replaceAll(',','')) + Number(postSalary1.replaceAll(',',''));
		return `salary for ${this.department} ${this.post} is ${sum}`;

	}
	postSalary(){
		const addSalary={
		admin:'50,000',
		engineer:'20,000',
		expert:'60,000',
		superadmin:'80,000'
	};
	return addSalary;

	}
	companyCar(){
		let temp="car is not available to you sir";
		this.mainJobs.forEach(
       (nithien)=>{
	       if (nithien==this.department){
		        temp="hey "+this.name+" congratulations, you got the company car";
	         }
              }
			)
		return temp;
			}


}
const inData=document.getElementById('msg');
const inData1=document.getElementById('msg1');

function getData(){
	let name=document.getElementById('name').value;
	let dept=document.getElementById('dept').value;
	let exp=document.getElementById('exp').value;
	let post=document.getElementById('post').value;
    let a1=new Admin(name,dept,post,exp);
	inData.innerText=a1.companyCar();
	inData1.innerText=a1.salaryInText();
	inData.style.display="inline";
	inData1.style.display="inline";
}
const obj=new Admin('master','softwareengineer','engineer',15);


