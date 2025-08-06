
        let roteiroSelecionado = '';

        function showHome() {
            hideAllScreens();
            document.getElementById('home').classList.remove('hidden');
            document.body.className = 'home-bg';
        }

        function showSobre() {
            hideAllScreens();
            document.getElementById('sobre').classList.remove('hidden');
            document.body.className = 'home-bg';
        }

        function showRoteiros() {
            hideAllScreens();
            document.getElementById('roteiros').classList.remove('hidden');
            document.body.className = 'roteiros-bg';
        }

        function showDetalhes(roteiro) {
            roteiroSelecionado = roteiro;
            hideAllScreens();
            document.getElementById('detalhes').classList.remove('hidden');
            document.body.className = 'detalhes-bg';
            
            const detalhesContent = document.getElementById('detalhes-content');
            
            if (roteiro === 'norte1') {
                detalhesContent.innerHTML = `
                    <h2>🏖️ Tour Norte 1</h2>
                    <p><strong>Duração:</strong> 8 horas (09:00 - 17:00)</p>
                    <p><strong>Valor:</strong> R$ 150,00 por pessoa</p>
                    <p><strong>Inclui:</strong> Transporte, guia especializado, água e lanche</p>
                    
                    <h3>📍 Roteiro Detalhado:</h3>
                    <ul style="text-align: left; padding-left: 20px;">
                        <li><strong>09:00</strong> - Saída do hotel</li>
                        <li><strong>09:30</strong> - Praia dos Ingleses (banho e caminhada)</li>
                        <li><strong>11:30</strong> - Praia do Santinho (trilhas e paisagens)</li>
                        <li><strong>13:00</strong> - Almoço em Canasvieiras</li>
                        <li><strong>15:00</strong> - Praia de Canasvieiras (atividades aquáticas)</li>
                        <li><strong>17:00</strong> - Retorno</li>
                    </ul>
                `;
            } else if (roteiro === 'norte2') {
                detalhesContent.innerHTML = `
                    <h2>🏖️ Tour Norte 2</h2>
                    <p><strong>Duração:</strong> 7 horas (09:00 - 16:00)</p>
                    <p><strong>Valor:</strong> R$ 140,00 por pessoa</p>
                    <p><strong>Inclui:</strong> Transporte, guia local, água e lanche</p>
                    
                    <h3>📍 Roteiro Detalhado:</h3>
                    <ul style="text-align: left; padding-left: 20px;">
                        <li><strong>09:00</strong> - Saída do hotel</li>
                        <li><strong>09:30</strong> - Praia de Lagoinha do Norte (natureza preservada)</li>
                        <li><strong>11:30</strong> - Ponta das Canas (pesca e contemplação)</li>
                        <li><strong>13:00</strong> - Almoço local</li>
                        <li><strong>14:30</strong> - Praia Brava (surf e paisagens selvagens)</li>
                        <li><strong>16:00</strong> - Retorno</li>
                    </ul>
                `;
            } else if (roteiro === 'norte3') {
                detalhesContent.innerHTML = `
                    <h2>🏖️ Tour Norte 3</h2>
                    <p><strong>Duração:</strong> 8 horas (09:00 - 17:00)</p>
                    <p><strong>Valor:</strong> R$ 180,00 por pessoa</p>
                    <p><strong>Inclui:</strong> Transporte, guia historiador, almoço premium</p>
                    
                    <h3>📍 Roteiro Detalhado:</h3>
                    <ul style="text-align: left; padding-left: 20px;">
                        <li><strong>09:00</strong> - Saída do hotel</li>
                        <li><strong>09:30</strong> - Jurerê Internacional (praia VIP e shopping)</li>
                        <li><strong>11:30</strong> - Praia de Canajurê (águas cristalinas)</li>
                        <li><strong>13:00</strong> - Almoço na Praia do Forte</li>
                        <li><strong>15:00</strong> - Santo Antônio de Lisboa (história açoriana)</li>
                        <li><strong>17:00</strong> - Retorno</li>
                    </ul>
                `;
            } else if (roteiro === 'leste1') {
                detalhesContent.innerHTML = `
                    <h2>🌊 Tour Leste 1</h2>
                    <p><strong>Duração:</strong> 8 horas (09:00 - 17:00)</p>
                    <p><strong>Valor:</strong> R$ 160,00 por pessoa</p>
                    <p><strong>Inclui:</strong> Transporte, guia local, sandboard, almoço</p>
                    
                    <h3>📍 Roteiro Detalhado:</h3>
                    <ul style="text-align: left; padding-left: 20px;">
                        <li><strong>09:00</strong> - Saída do hotel</li>
                        <li><strong>09:30</strong> - Praia da Joaquina (surf e sandboard)</li>
                        <li><strong>11:30</strong> - Praia Mole (relaxamento e natureza)</li>
                        <li><strong>13:00</strong> - Almoço na Lagoa da Conceição</li>
                        <li><strong>15:00</strong> - Passeio pela Lagoa (centro boêmio)</li>
                        <li><strong>17:00</strong> - Retorno</li>
                    </ul>
                `;
            } else if (roteiro === 'leste2') {
                detalhesContent.innerHTML = `
                    <h2>🌊 Tour Leste 2</h2>
                    <p><strong>Duração:</strong> 9 horas (08:00 - 17:00)</p>
                    <p><strong>Valor:</strong> R$ 170,00 por pessoa</p>
                    <p><strong>Inclui:</strong> Transporte, guia local, passeio de barco, almoço</p>
                    
                    <h3>📍 Roteiro Detalhado:</h3>
                    <ul style="text-align: left; padding-left: 20px;">
                        <li><strong>08:00</strong> - Saída do hotel</li>
                        <li><strong>08:30</strong> - Barra da Lagoa (vila de pescadores)</li>
                        <li><strong>10:30</strong> - Praia do Moçambique (praia selvagem)</li>
                        <li><strong>13:00</strong> - Almoço típico</li>
                        <li><strong>14:30</strong> - Costa da Lagoa (passeio de barco)</li>
                        <li><strong>17:00</strong> - Retorno</li>
                    </ul>
                `;
            } else if (roteiro === 'sul') {
                detalhesContent.innerHTML = `
                    <h2>🏖️ Tour Sul</h2>
                    <p><strong>Duração:</strong> 10 horas (08:00 - 18:00)</p>
                    <p><strong>Valor:</strong> R$ 200,00 por pessoa</p>
                    <p><strong>Inclui:</strong> Transporte, guia especializado, passeio de barco à Ilha do Campeche, almoço</p>
                    
                    <h3>📍 Roteiro Detalhado:</h3>
                    <ul style="text-align: left; padding-left: 20px;">
                        <li><strong>08:00</strong> - Saída do hotel</li>
                        <li><strong>08:30</strong> - Praia do Campeche (embarque para a ilha)</li>
                        <li><strong>09:00</strong> - Ilha do Campeche (paraíso preservado)</li>
                        <li><strong>12:00</strong> - Almoço na Armação</li>
                        <li><strong>14:00</strong> - Praia do Morro das Pedras</li>
                        <li><strong>16:00</strong> - Pantano do Sul (vila de pescadores)</li>
                        <li><strong>18:00</strong> - Retorno</li>
                    </ul>
                `;
            }
        }

        function showConfirmacao() {
            hideAllScreens();
            document.getElementById('confirmacao').classList.remove('hidden');
            document.body.className = 'confirmacao-bg';
        }

        function hideAllScreens() {
            const screens = document.querySelectorAll('.screen');
            screens.forEach(screen => screen.classList.add('hidden'));
        }

        // Inicializar na tela home
        showHome();
    