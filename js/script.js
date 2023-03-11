window.addEventListener('load', () => {
    const $ = id => document.getElementById(id);
    let form = $('empForm');
    let id, name, ext, email, department;
    form.addEventListener('submit', e => {
        e.preventDefault();
        id = $('id').value;
        name = $('name').value;
        ext = $('ext').value;
        email = $('email').value;
        department = $('department').value;
        console.log(`ID: ${id}\nName: ${name}\nExtension: ${ext}\nEmail: ${email}\nDepartment: ${department}`);
    });
});
