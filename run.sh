#!/bin/bash
# Pai do Ano — Setup & Run Script (Linux/macOS)

echo "🏆 Pai do Ano — Iniciando..."

# Backend
echo "🔧 Instalando dependências do backend..."
cd backend
python3 -m venv venv 2>/dev/null || true
source venv/bin/activate 2>/dev/null || true
pip install -q -r requirements.txt

# Pede a API key se não existir
if [ ! -f ".env" ]; then
  echo ""
  echo "🔑 Coloca sua GROQ_API_KEY abaixo (https://console.groq.com):"
  read -p "GROQ_API_KEY=" API_KEY
  echo "GROQ_API_KEY=$API_KEY" > .env
fi

echo "▶ Subindo backend na porta 8003..."
nohup python -m uvicorn main:app --port 8003 --reload > /tmp/paidoano_backend.log 2>&1 &
BACKEND_PID=$!

cd ../frontend

echo "📦 Instalando dependências do frontend..."
npm install --silent 2>/dev/null

echo "▶ Subindo frontend na porta 3002..."
npm run dev > /tmp/paidoano_frontend.log 2>&1 &
FRONTEND_PID=$!

sleep 5
echo ""
echo "✅ Pai do Ano está rodando!"
echo "   🖥  Frontend: http://localhost:3002"
echo "   ⚙  Backend:  http://localhost:8003"
echo ""
echo "Para parar: kill $BACKEND_PID $FRONTEND_PID"
