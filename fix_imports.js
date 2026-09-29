const fs = require('fs');
const files = ['BotBubble.tsx', 'CatalogModal.tsx', 'Step5SuccessView.tsx', 'RfqSheetModal.tsx', 'RfqHistoryModal.tsx', 'ApiPayloadModal.tsx'];
for(let f of files) {
  let path = 'src/components/chatbot/' + f;
  let code = fs.readFileSync(path, 'utf8');
  code = code.replace(/from '\.\.\/types'/g, "from '../../types'");
  code = code.replace(/from '\.\.\/data\/catalog'/g, "from '../../data/catalog'");
  fs.writeFileSync(path, code);
}
console.log('Imports fixed.');
