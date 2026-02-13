document.addEventListener('DOMContentLoaded', () => {
    // Función para actualizar los valores de los sliders
    function setupSlider(sliderId, displayId) {
        const slider = document.getElementById(sliderId);
        const display = document.getElementById(displayId);

        function updateSliderBackground(el) {
            const value = (el.value - el.min) / (el.max - el.min) * 100;
            el.style.background = `linear-gradient(to right, #ff5f1f 0%, #ff5f1f ${value}%, #1a1a1a ${value}%, #1a1a1a 100%)`;
        }

        if (slider && display) {
            // Inicializar background
            updateSliderBackground(slider);

            slider.addEventListener('input', (e) => {
                display.textContent = e.target.value;
                updateSliderBackground(e.target);
            });
        }
    }

    // Configurar todos los sliders
    setupSlider('fps-slider', 'fps-value');
    setupSlider('range-slider', 'range-value');
    setupSlider('font-slider', 'font-value');
    setupSlider('bone-width-slider', 'bone-width-value');
    setupSlider('box-width-slider', 'box-width-value');
    setupSlider('line-width-slider', 'line-width-value');

    // Configurar Color Pickers
    function setupColorPicker(inputId, previewId) {
        const input = document.getElementById(inputId);
        const preview = document.getElementById(previewId);

        if (input && preview) {
            input.addEventListener('input', (e) => {
                preview.style.backgroundColor = e.target.value;
            });
        }
    }

    setupColorPicker('bones-color', 'bones-color-preview');
    setupColorPicker('box-color', 'box-color-preview');
    setupColorPicker('line-color', 'line-color-preview');
    setupColorPicker('tags-color', 'tags-color-preview');
    setupColorPicker('range-display-color', 'range-display-color-preview');
    setupColorPicker('equipment-color', 'equipment-color-preview');

    // Obscured Colors
    setupColorPicker('bones-inv-color', 'bones-inv-color-preview');
    setupColorPicker('box-inv-color', 'box-inv-color-preview');
    setupColorPicker('line-inv-color', 'line-inv-color-preview');
    setupColorPicker('tags-inv-color', 'tags-inv-color-preview');
    setupColorPicker('range-display-inv-color', 'range-display-inv-color-preview');
    setupColorPicker('equipment-inv-color', 'equipment-inv-color-preview');

    // Inicializar Sliders de AIM
    setupSlider('aim-range-slider', 'aim-range-value');
    setupSlider('aim-radius-slider', 'aim-radius-value');
    setupSlider('aim-smooth-slider', 'aim-smooth-value');
    setupSlider('aim-zone-slider', 'aim-zone-value');

    // Inicializar Color Pickers de AIM
    setupColorPicker('crosshair-color', 'crosshair-color-preview');

    // Navegación (Tabs)
    const navItems = document.querySelectorAll('.nav-item');

    // Mapeo simple de texto de navegación a ID de pestaña
    const tabMap = {
        'AIM': 'tab-aim',
        'ESP': 'tab-esp'
    };

    // Configurar Sliders AI AIM
    setupSlider('ai-smooth-slider', 'ai-smooth-value');
    setupSlider('ai-range-max-slider', 'ai-range-max-value');

    // Configurar Sliders AI ESP
    setupSlider('npc-range-slider', 'npc-range-value');
    setupSlider('npc-structure-width-slider', 'npc-structure-width-value');
    setupSlider('npc-box-width-slider', 'npc-box-width-value');
    setupSlider('npc-line-width-slider', 'npc-line-width-value');

    // Configurar Color Pickers AI ESP
    setupColorPicker('npc-visible-color', 'npc-visible-color-preview');
    setupColorPicker('npc-invisible-color', 'npc-invisible-color-preview');
    setupColorPicker('npc-fill-color', 'npc-fill-color-preview');

    // Configurar Sliders Loot
    setupSlider('item-scan-range-slider', 'item-scan-range-value');

    // Configurar Color Pickers Loot
    setupColorPicker('loot-firearm-color', 'loot-firearm-color-preview');
    setupColorPicker('loot-vest-color', 'loot-vest-color-preview');
    setupColorPicker('loot-heavy-vest-color', 'loot-heavy-vest-color-preview');
    setupColorPicker('loot-ammo-color', 'loot-ammo-color-preview');
    setupColorPicker('loot-currency-color', 'loot-currency-color-preview');
    setupColorPicker('loot-container-color', 'loot-container-color-preview');
    setupColorPicker('loot-scorestreak-color', 'loot-scorestreak-color-preview');
    setupColorPicker('loot-stim-color', 'loot-stim-color-preview');
    setupColorPicker('loot-gas-color', 'loot-gas-color-preview');

    // Configurar Sliders Overlay
    setupSlider('overlay-player-scan-slider', 'overlay-player-scan-value');
    setupSlider('overlay-ai-scan-slider', 'overlay-ai-scan-value');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            // UI Activa
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Cambio de lógica de Pestaña usando data-tab
            const targetId = item.dataset.tab;

            // Fallback antigua lógica (por si acaso)
            // const tabName = item.textContent.trim().split(/\s+/).pop();
            // const targetId = tabMap[tabName] || item.dataset.tab;

            if (targetId) {
                // Ocultar todas
                document.querySelectorAll('.tab-content').forEach(tab => {
                    tab.classList.remove('active');
                });
                // Mostrar la seleccionada
                const targetTab = document.getElementById(targetId);
                if (targetTab) {
                    targetTab.classList.add('active');
                }
            }
        });
    });

    // Modos (Solo visual para demo)
    const modes = document.querySelectorAll('.mode');
    modes.forEach(mode => {
        mode.addEventListener('click', () => {
            modes.forEach(m => m.classList.remove('active'));
            mode.classList.add('active');
        });
    });
});
