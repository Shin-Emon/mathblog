const tags = {
    'algebra': {
        'name': '代数'
    },

    'geo': {
        'name': '幾何'
    },

    'insight': {
        'name': 'ひらめき'
    },

    'basic': {
        'name': '基本'
    },

    'words': {
        'name': '文章題'
    }
};

const level = {
    'junior': {
        'name': '中学'
    },

    'senior': {
        'name': '高校'
    }
}

const posts = [
    {
        'id': 'introduction',
        'title': '最初の一問',
        'date': '2024-12-15',
        'tags': [tags.algebra, tags.basic],
        'level': level.junior
    },
    {
        'id': 'p-circle-L1',
        'title': '円と接線',
        'date': '2024-12-15',
        'tags': [tags.geo, tags.basic],
        'level': level.junior
    },
];

window.onload = () => {
    const li = document.getElementById('posts');

    posts.forEach(post => {
        let tagHtml = `<span class='tag'>${post.level.name}</span>`;
        for (const tag of post.tags) {
            tagHtml = tagHtml.concat(`<span class='tag'>${tag.name}</span>`);
        }

        let ul = document.createElement('div');
        ul.className = 'post-ul';
        ul.innerHTML = `<a href="pages/${post.id}.html">${post.title}</a><p>${tagHtml}</p><p>${post.date}</p>`;
        
        li.appendChild(ul);
    });
};