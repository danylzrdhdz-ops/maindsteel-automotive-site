@echo off
mkdir src\components\chatbot
xcopy /s /y "maindsteel-automotive---b2b-chat-&-rfq\src\components\*" "src\components\chatbot\"
copy /y "maindsteel-automotive---b2b-chat-&-rfq\src\data\catalog.ts" "src\data\"
