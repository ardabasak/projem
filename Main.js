function toggleleftsidebar() {
    document.getElementById('leftsidebar').classList.toggle('active');
}
const input = document.getElementById('search.input');
const searchbtn = document.getElementById('search.btn');

const expand = () => {
    searchbtn.classList.toggle("close");
    input.classList.toggle("square")

};
searchbtn.addEventListener("click",expand)