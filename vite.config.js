import {defineConfig} from 'vite';
import {resolve} from 'path';

export default defineConfig({
  build:{
    rollupOptions:{
      input:{
        home:resolve(__dirname,'index.html'),
        about:resolve(__dirname,'about.html'),
        program:resolve(__dirname,'program.html'),
        results:resolve(__dirname,'results.html'),
        journal:resolve(__dirname,'journal.html'),
        shop:resolve(__dirname,'shop.html'),
        reservation:resolve(__dirname,'reservation.html')
      }
    }
  }
});
