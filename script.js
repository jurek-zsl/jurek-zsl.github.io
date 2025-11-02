// Tech Stack Icon Mapping
function getTechIcon(tech) {
    const techLower = tech.toLowerCase().replace(/\s+/g, '').replace(/\./g, '');
    
    const iconMap = {
        // Languages
        'javascript': '<i class="devicon-javascript-plain colored"></i>',
        'js': '<i class="devicon-javascript-plain colored"></i>',
        'typescript': '<i class="devicon-typescript-plain colored"></i>',
        'ts': '<i class="devicon-typescript-plain colored"></i>',
        'python': '<i class="devicon-python-plain colored"></i>',
        'java': '<i class="devicon-java-plain colored"></i>',
        'go': '<i class="devicon-go-plain colored"></i>',
        'golang': '<i class="devicon-go-plain colored"></i>',
        'rust': '<i class="devicon-rust-plain colored"></i>',
        'c': '<i class="devicon-c-plain colored"></i>',
        'c++': '<i class="devicon-cplusplus-plain colored"></i>',
        'cpp': '<i class="devicon-cplusplus-plain colored"></i>',
        'c#': '<i class="devicon-csharp-plain colored"></i>',
        'csharp': '<i class="devicon-csharp-plain colored"></i>',
        'php': '<i class="devicon-php-plain colored"></i>',
        'ruby': '<i class="devicon-ruby-plain colored"></i>',
        'swift': '<i class="devicon-swift-plain colored"></i>',
        'kotlin': '<i class="devicon-kotlin-plain colored"></i>',
        'dart': '<i class="devicon-dart-plain colored"></i>',
        
        // Frontend Frameworks
        'react': '<i class="devicon-react-original colored"></i>',
        'reactjs': '<i class="devicon-react-original colored"></i>',
        'vue': '<i class="devicon-vuejs-plain colored"></i>',
        'vuejs': '<i class="devicon-vuejs-plain colored"></i>',
        'angular': '<i class="devicon-angularjs-plain colored"></i>',
        'svelte': '<i class="devicon-svelte-plain colored"></i>',
        'nextjs': '<i class="devicon-nextjs-plain colored"></i>',
        'next.js': '<i class="devicon-nextjs-plain colored"></i>',
        
        // Backend Frameworks
        'nodejs': '<i class="devicon-nodejs-plain colored"></i>',
        'node.js': '<i class="devicon-nodejs-plain colored"></i>',
        'node': '<i class="devicon-nodejs-plain colored"></i>',
        'express': '<i class="devicon-express-original colored"></i>',
        'expressjs': '<i class="devicon-express-original colored"></i>',
        'django': '<i class="devicon-django-plain colored"></i>',
        'flask': '<i class="devicon-flask-original colored"></i>',
        'laravel': '<i class="devicon-laravel-plain colored"></i>',
        'rails': '<i class="devicon-rails-plain colored"></i>',
        'spring': '<i class="devicon-spring-plain colored"></i>',
        'springboot': '<i class="devicon-spring-plain colored"></i>',
        
        // Databases
        'mongodb': '<i class="devicon-mongodb-plain colored"></i>',
        'mysql': '<i class="devicon-mysql-plain colored"></i>',
        'postgresql': '<i class="devicon-postgresql-plain colored"></i>',
        'postgres': '<i class="devicon-postgresql-plain colored"></i>',
        'redis': '<i class="devicon-redis-plain colored"></i>',
        'sqlite': '<i class="devicon-sqlite-plain colored"></i>',
        'mariadb': '<i class="devicon-mysql-plain colored"></i>',
        
        // Cloud & DevOps
        'docker': '<i class="devicon-docker-plain colored"></i>',
        'kubernetes': '<i class="devicon-kubernetes-plain colored"></i>',
        'k8s': '<i class="devicon-kubernetes-plain colored"></i>',
        'aws': '<i class="devicon-amazonwebservices-plain-wordmark colored"></i>',
        'azure': '<i class="devicon-azure-plain colored"></i>',
        'gcp': '<i class="devicon-googlecloud-plain colored"></i>',
        'googlecloud': '<i class="devicon-googlecloud-plain colored"></i>',
        'heroku': '<i class="devicon-heroku-plain colored"></i>',
        'nginx': '<i class="devicon-nginx-original colored"></i>',
        'jenkins': '<i class="devicon-jenkins-plain colored"></i>',
        'gitlab': '<i class="devicon-gitlab-plain colored"></i>',
        'github': '<i class="devicon-github-original colored"></i>',
        
        // Tools & Others
        'git': '<i class="devicon-git-plain colored"></i>',
        'webpack': '<i class="devicon-webpack-plain colored"></i>',
        'vite': '<i class="devicon-vitejs-plain colored"></i>',
        'babel': '<i class="devicon-babel-plain colored"></i>',
        'npm': '<i class="devicon-npm-original-wordmark colored"></i>',
        'yarn': '<i class="devicon-yarn-plain colored"></i>',
        'sass': '<i class="devicon-sass-original colored"></i>',
        'scss': '<i class="devicon-sass-original colored"></i>',
        'tailwindcss': '<i class="devicon-tailwindcss-plain colored"></i>',
        'tailwind': '<i class="devicon-tailwindcss-plain colored"></i>',
        'bootstrap': '<i class="devicon-bootstrap-plain colored"></i>',
        'materialui': '<i class="devicon-materialui-plain colored"></i>',
        'material-ui': '<i class="devicon-materialui-plain colored"></i>',
        'mui': '<i class="devicon-materialui-plain colored"></i>',
        'figma': '<i class="devicon-figma-plain colored"></i>',
        'graphql': '<i class="devicon-graphql-plain colored"></i>',
        'redux': '<i class="devicon-redux-original colored"></i>',
        'electron': '<i class="devicon-electron-original colored"></i>',
        'flutter': '<i class="devicon-flutter-plain colored"></i>',
        'reactnative': '<i class="devicon-react-original colored"></i>',
        'jest': '<i class="devicon-jest-plain colored"></i>',
        'firebase': '<i class="devicon-firebase-plain colored"></i>',
        'tensorflow': '<i class="devicon-tensorflow-original colored"></i>',
        'pytorch': '<i class="devicon-pytorch-original colored"></i>',
        'linux': '<i class="devicon-linux-plain colored"></i>',
        'ubuntu': '<i class="devicon-ubuntu-plain colored"></i>',
        'debian': '<i class="devicon-debian-plain colored"></i>',
        'vim': '<i class="devicon-vim-plain colored"></i>',
        'vscode': '<i class="devicon-vscode-plain colored"></i>',
        
        // Markup & Styling
        'html': '<i class="devicon-html5-plain colored"></i>',
        'html5': '<i class="devicon-html5-plain colored"></i>',
        'css': '<i class="devicon-css3-plain colored"></i>',
        'css3': '<i class="devicon-css3-plain colored"></i>',
        'markdown': '<i class="fas fa-markdown"></i>',
        'json': '<i class="fas fa-code"></i>',
        'xml': '<i class="fas fa-code"></i>',
        'yaml': '<i class="fas fa-code"></i>',
        
        // Others with Font Awesome fallback
        'api': '<i class="fas fa-plug"></i>',
        'rest': '<i class="fas fa-network-wired"></i>',
        'restful': '<i class="fas fa-network-wired"></i>',
        'websocket': '<i class="fas fa-broadcast-tower"></i>',
        'cli': '<i class="fas fa-terminal"></i>',
        'bash': '<i class="fas fa-terminal"></i>',
        'shell': '<i class="fas fa-terminal"></i>',
        'powershell': '<i class="fas fa-terminal"></i>',
    };
    
    return iconMap[techLower] || `<i class="fas fa-cube"></i>`;
}

// Theme Management
function initTheme() {
    const theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }
}

// Weather API
async function fetchWeather() {
    const weatherWidget = document.getElementById('weather-widget');
    if (!weatherWidget) return;

    try {
        // Using Open-Meteo API (no API key required)
        const lat = 36.7213; // Malaga latitude
        const lon = -4.4214; // Malaga longitude
        
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=Europe/Madrid`
        );
        
        if (!response.ok) throw new Error('Weather fetch failed');
        
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather:', error);
        weatherWidget.innerHTML = `
            <div class="weather-error">
                <i class="fas fa-exclamation-circle"></i>
                <span>Weather data unavailable</span>
            </div>
        `;
    }
}

function getWeatherIcon(code) {
    // WMO Weather interpretation codes
    const weatherIcons = {
        0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️',
        45: '🌫️', 48: '🌫️',
        51: '🌦️', 53: '🌦️', 55: '🌦️',
        61: '🌧️', 63: '🌧️', 65: '🌧️',
        71: '🌨️', 73: '🌨️', 75: '🌨️',
        80: '🌦️', 81: '🌦️', 82: '🌦️',
        95: '⛈️', 96: '⛈️', 99: '⛈️'
    };
    return weatherIcons[code] || '🌡️';
}

function getWeatherDescription(code) {
    const descriptions = {
        0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
        45: 'Foggy', 48: 'Foggy',
        51: 'Light drizzle', 53: 'Drizzle', 55: 'Heavy drizzle',
        61: 'Light rain', 63: 'Rain', 65: 'Heavy rain',
        71: 'Light snow', 73: 'Snow', 75: 'Heavy snow',
        80: 'Light showers', 81: 'Showers', 82: 'Heavy showers',
        95: 'Thunderstorm', 96: 'Thunderstorm with hail', 99: 'Heavy thunderstorm'
    };
    return descriptions[code] || 'Unknown';
}

function displayWeather(data) {
    const weatherWidget = document.getElementById('weather-widget');
    const { temperature_2m, relative_humidity_2m, wind_speed_10m, weather_code } = data.current;
    
    weatherWidget.innerHTML = `
        <div class="weather-content">
            <div class="weather-main">
                <div class="weather-icon">${getWeatherIcon(weather_code)}</div>
                <div>
                    <div class="weather-temp">${Math.round(temperature_2m)}°C</div>
                    <div class="weather-description">${getWeatherDescription(weather_code)}</div>
                    <div class="weather-location"><i class="fas fa-map-marker-alt"></i> Malaga, Spain</div>
                </div>
            </div>
            <div class="weather-details">
                <div class="weather-detail">
                    <i class="fas fa-tint"></i>
                    <span>${relative_humidity_2m}%</span>
                </div>
                <div class="weather-detail">
                    <i class="fas fa-wind"></i>
                    <span>${Math.round(wind_speed_10m)} km/h</span>
                </div>
            </div>
        </div>
    `;
}

// Projects Management
async function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    try {
        const response = await fetch('data/projects.json');
        const projects = await response.json();
        
        displayProjects(projects);
        setupFilters(projects);
    } catch (error) {
        console.error('Error loading projects:', error);
        projectsGrid.innerHTML = `
            <div class="loading-spinner">
                <i class="fas fa-exclamation-circle"></i>
                <p>Failed to load projects</p>
            </div>
        `;
    }
}

// Get custom tag class based on tag name hash
function getCustomTagClass(tag) {
    const knownTags = [
        'free', 'opensource', 'paid', 'premium', 'closed-source', 'closedsource',
        'macos', 'windows', 'linux', 'crossplatform', 'fork', 'web'
    ];
    const lowerTag = tag.toLowerCase().replace(/[\s-]/g, '');
    
    // If it's a known tag, use the predefined class
    if (knownTags.includes(lowerTag)) {
        return lowerTag;
    }
    
    // For custom tags, generate a consistent color based on the tag name
    let hash = 0;
    for (let i = 0; i < tag.length; i++) {
        hash = tag.charCodeAt(i) + ((hash << 5) - hash);
    }
    const colorIndex = (Math.abs(hash) % 10) + 1;
    return `custom-${colorIndex}`;
}

// Sort tags by priority
function sortTags(tags) {
    const tagPriority = {
        'free': 1,
        'paid': 2,
        'premium': 2,
        'opensource': 3,
        'closedsource': 4,
        'closed-source': 4,
        'fork': 5,
        'web': 6,
        'macos': 10,
        'windows': 11,
        'linux': 12,
        'crossplatform': 13
    };
    
    return tags.slice().sort((a, b) => {
        const aPriority = tagPriority[a.toLowerCase().replace(/[\s-]/g, '')] || 100;
        const bPriority = tagPriority[b.toLowerCase().replace(/[\s-]/g, '')] || 100;
        
        if (aPriority !== bPriority) {
            return aPriority - bPriority;
        }
        
        // If same priority, sort alphabetically
        return a.localeCompare(b);
    });
}

function displayProjects(projects, filter = 'all') {
    const projectsGrid = document.getElementById('projects-grid');
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.tags.some(tag => tag.toLowerCase() === filter.toLowerCase()));
    
    if (filteredProjects.length === 0) {
        projectsGrid.innerHTML = `
            <div class="loading-spinner">
                <i class="fas fa-folder-open"></i>
                <p>No projects found</p>
            </div>
        `;
        return;
    }
    
    projectsGrid.innerHTML = filteredProjects.map(project => {
        const sortedTags = sortTags(project.tags);
        return `
            <a href="project-detail.html?id=${project.id}" class="project-card">
                <h3>${project.name}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${sortedTags.map(tag => `<span class="tag ${getCustomTagClass(tag)}">${tag}</span>`).join('')}
                </div>
                <div class="project-meta">
                    <span><i class="fas fa-calendar"></i> ${project.releaseDate}</span>
                </div>
                <div class="project-stack">
                    <div class="project-stack-title">Tech Stack:</div>
                    <div class="stack-badges">
                        ${project.stack.map(tech => `<span class="stack-badge">${getTechIcon(tech)} ${tech}</span>`).join('')}
                    </div>
                </div>
            </a>
        `;
    }).join('');
}

function setupFilters(projects) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            displayProjects(projects, filter);
        });
    });
}

// Project Detail
async function loadProjectDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const detailContent = document.getElementById('project-detail-content');
    
    if (!detailContent || !projectId) return;

    try {
        const response = await fetch('data/projects.json');
        const projects = await response.json();
        const project = projects.find(p => p.id === projectId);
        
        if (!project) {
            detailContent.innerHTML = `
                <div class="loading-spinner">
                    <i class="fas fa-exclamation-circle"></i>
                    <p>Project not found</p>
                </div>
            `;
            return;
        }
        
        displayProjectDetail(project);
    } catch (error) {
        console.error('Error loading project detail:', error);
        detailContent.innerHTML = `
            <div class="loading-spinner">
                <i class="fas fa-exclamation-circle"></i>
                <p>Failed to load project details</p>
            </div>
        `;
    }
}

function displayProjectDetail(project) {
    const detailContent = document.getElementById('project-detail-content');
    const sortedTags = sortTags(project.tags);
    
    detailContent.innerHTML = `
        <div class="project-detail-header">
            <h1>${project.name}</h1>
            <div class="project-tags">
                ${sortedTags.map(tag => `<span class="tag ${getCustomTagClass(tag)}">${tag}</span>`).join('')}
            </div>
            <div class="project-meta">
                <span><i class="fas fa-calendar"></i> Released: ${project.releaseDate}</span>
            </div>
        </div>
        
        <div class="project-detail-content">
            <h2><i class="fas fa-info-circle"></i> About</h2>
            <p>${project.description}</p>
            ${project.longDescription ? `<p>${project.longDescription}</p>` : ''}
            
            <h2><i class="fas fa-code"></i> Tech Stack</h2>
            <div class="stack-badges">
                ${project.stack.map(tech => `<span class="stack-badge">${getTechIcon(tech)} ${tech}</span>`).join('')}
            </div>
            
            <h2><i class="fas fa-star"></i> Features</h2>
            <ul>
                ${(project.features || ['Feature information coming soon']).map(f => `<li>${f}</li>`).join('')}
            </ul>
            
            ${project.links ? `
                <h2><i class="fas fa-link"></i> Links</h2>
                <div class="project-links">
                    ${project.links.github ? `
                        <a href="${project.links.github}" target="_blank" rel="noopener" class="project-link-btn">
                            <i class="fab fa-github"></i> View on GitHub
                        </a>
                    ` : ''}
                    ${project.links.demo ? `
                        <a href="${project.links.demo}" target="_blank" rel="noopener" class="project-link-btn">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    ` : ''}
                    ${project.links.download ? `
                        <a href="${project.links.download}" class="project-link-btn">
                            <i class="fas fa-download"></i> Download
                        </a>
                    ` : ''}
                </div>
            ` : ''}
        </div>
    `;
}

// Files Management
async function loadFiles() {
    const filesList = document.getElementById('files-list');
    if (!filesList) return;

    try {
        const response = await fetch('data/files.json');
        const files = await response.json();
        
        displayFiles(files);
    } catch (error) {
        console.error('Error loading files:', error);
        filesList.innerHTML = `
            <div class="loading-spinner">
                <i class="fas fa-exclamation-circle"></i>
                <p>Failed to load files</p>
            </div>
        `;
    }
}

function displayFiles(files) {
    const filesList = document.getElementById('files-list');
    
    if (files.length === 0) {
        filesList.innerHTML = `
            <div class="loading-spinner">
                <i class="fas fa-folder-open"></i>
                <p>No files available</p>
            </div>
        `;
        return;
    }
    
    filesList.innerHTML = files.map(file => `
        <div class="file-item">
            <div class="file-info">
                <div class="file-name">
                    <i class="fas fa-file"></i> ${file.name}
                </div>
                <div class="file-meta">
                    <div class="file-meta-item">
                        <i class="fas fa-file-alt"></i>
                        <span>${file.filename}</span>
                    </div>
                    <div class="file-meta-item">
                        <i class="fas fa-hdd"></i>
                        <span>${file.size}</span>
                    </div>
                    <div class="file-meta-item">
                        <i class="fas fa-calendar"></i>
                        <span>${file.date}</span>
                    </div>
                </div>
            </div>
            <a href="${file.url}" download class="file-download-btn">
                <i class="fas fa-download"></i>
                Download
            </a>
        </div>
    `).join('');
}

// Format file size
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    
    // Setup theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Load page-specific content
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === 'index.html' || currentPage === '') {
        fetchWeather();
    } else if (currentPage === 'projects.html') {
        loadProjects();
    } else if (currentPage === 'project-detail.html') {
        loadProjectDetail();
    } else if (currentPage === 'files.html') {
        loadFiles();
    }
});
