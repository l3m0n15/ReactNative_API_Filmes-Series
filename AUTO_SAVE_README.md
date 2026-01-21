# Auto-Save GitHub

Este projeto está configurado para salvar automaticamente suas alterações no GitHub a cada 30 segundos.

## Como Funciona

O script PowerShell `auto-git-start.ps1` faz o seguinte:

1. ✅ Verifica se há mudanças no projeto
2. ✅ Faz `git add .` para adicionar os arquivos modificados
3. ✅ Cria um commit automático com timestamp
4. ✅ Faz `git push` para enviar as alterações ao GitHub
5. ⏱️ Aguarda 30 segundos e repete o processo

## Arquivo de Configuração: .gitignore

O `.gitignore` foi atualizado para ignorar:

- `node_modules/` - Dependências do projeto
- `.expo/` - Arquivos de cache do Expo
- `.env` - Variáveis de ambiente
- `.vscode/` - Configurações do VS Code
- Arquivos temporários e de sistema

Isso evita que arquivos desnecessários sejam commitados continuamente.

## Como Iniciar o Auto-Save

```powershell
# Opção 1: Executar diretamente
powershell -ExecutionPolicy Bypass -File "C:\Users\snand\ReactNative_API_Filmes-Series\auto-git-start.ps1"

# Opção 2: Usando o arquivo .bat
.\auto-git.bat
```

## Como Parar o Auto-Save

Simplesmente feche a janela do PowerShell que está executando o script ou pressione `Ctrl+C`.

## Exemplo de Saída

```
╔════════════════════════════════════════╗
║    Auto-Save GitHub Iniciado!         ║
╚════════════════════════════════════════╝
📁 Repositório: c:\Users\snand\ReactNative_API_Filmes-Series
⏱️  Intervalo: 30 segundos
🔄 Branch: main

[14:32:15] ⏳ Sincronizando com GitHub...
[14:32:18] ✅ Sincronizado com sucesso! (Commit #1)
[14:32:48] ℹ️  Nenhuma mudança detectada
[14:33:18] ⏳ Sincronizando com GitHub...
[14:33:20] ✅ Sincronizado com sucesso! (Commit #2)
```

## Verificar no GitHub

Para verificar se suas alterações foram sincronizadas:

1. Abra seu repositório no GitHub
2. Verifique a seção "Commits" ou "Activity"
3. Procure pelos commits com nome "auto commit #X"

## Observações

- Certificar-se de que você está na branch `main`
- O script respeita o arquivo `.gitignore`
- Cada commit deve ser pequeno e rápido
- Se houver conflitos, o script tentará fazer pull antes de push

---

**Seu projeto está protegido! Todas as mudanças são salvas automaticamente no GitHub.** 🎉
