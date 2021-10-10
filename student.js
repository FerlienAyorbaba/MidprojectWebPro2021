const form = document.querySelector('form');
const add = document.querySelector("#faculties");

form.addEventListener('Add Student', insertFaculty);
faculties.addEventListener('click',removeFaculty);

function insertFaculty(e){
    e.preventDefault();
}
let inputIDNIM = document.querySelector('#input-IDNIM');
let FullName = document.querySelector('#input-FullName');
let Gender = document.querySelector('#Gender');
let SelectFaculty = document.querySelector('#input-Faculty');
let ProgramofStudy = document.querySelector('#input-Prodi');

let deleteLink = document.createElement('a');
deleteLink.className = 'delete';
deleteLink.setAttribute('href','#');
deleteLink.appendChild(document.createTextNode('Delete'));

const faculties =[
    'Pascasarjana',
    'Fakultas Filsafat',
    'Fakultas Keguruan dan Ilmu Pendidikan',
    'Fakultas Ekonomi dan Bisnis',
    'Fakultas Pertanian',
    'Fakultas Ilmu Komputer',
    'Fakultas Keperawatan',
    'Akademi Sekretaris Manajemen Indonesia Klabat',
];

submit_button.addEventListener('Add',() => {
	let student_nim = document.querySelector("#input-IDNIM").value;
	let student_name = document.querySelector("#input-FullName").value;
	let student_gender = document.querySelector('Gender:checked').value;
	let student_faculty = document.querySelector("#Faculty").options[document.querySelector("#Faculty").selectedIndex].value;
	let student_program_study = document.querySelector("#Prodi").options[document.querySelector("#Prodi").selectedIndex].value;