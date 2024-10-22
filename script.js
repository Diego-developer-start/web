// Dados dos produtos
const products = [
    {
        category: 'Celulares',
        icon: 'fas fa-mobile-alt',
        price: 'R$ 500,00',
        description: 'iPhone 8 - 64GB, em bom estado'
    },
    {
        category: 'Videogames',
        icon: 'fas fa-gamepad',
        price: 'R$ 1.200,00',
        description: 'PlayStation 4, completo com dois controles'
    },
    {
        category: 'Televisões',
        icon: 'fas fa-tv',
        price: 'R$ 800,00',
        description: 'Smart TV Samsung 40 polegadas'
    },
    {
        category: 'Computadores',
        icon: 'fas fa-laptop',
        price: 'R$ 1.500,00',
        description: 'Notebook Dell i5 - 8GB RAM, 256GB SSD'
    }
];

// Função para exibir produtos
function displayProducts(products) {
    const container = document.getElementById('productContainer');
    container.innerHTML = ''; // Limpa o container

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'category-card';

        card.innerHTML = `
            <div class="category-icon"><i class="${product.icon}"></i></div>
            <div class="category-title">${product.category}</div>
            <div class="item-details">
                <div class="price">${product.price}</div>
                <div class="description">${product.description}</div>
            </div>
        `;

        container.appendChild(card);
    });
}

// Função para redirecionar para a página de produtos
function goToProductPage() {
    document.getElementById('signupPage').classList.add('hidden');
    document.getElementById('productPage').classList.remove('hidden');
    displayProducts(products); // Exibe os produtos
}

// Manipula o formulário de cadastro
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    goToProductPage(); // Vai para a página de produtos após o cadastro
});

// Função para buscar produtos
function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.category.toLowerCase().includes(searchInput) ||
        product.description.toLowerCase().includes(searchInput)
    );
    displayProducts(filteredProducts);
}

// Adiciona a funcionalidade de busca
document.getElementById('searchInput').addEventListener('input', searchProducts);
