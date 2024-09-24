hidedidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    const menu = document.getElementById('menubn')
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block';
        menu.value = 'Close';
    } else {
        menu.value = 'Menu'
        sidebar.style.display = 'none';
    }
}