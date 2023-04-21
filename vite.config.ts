import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, './src/assets'),
            '@components': path.resolve(__dirname, './src/components'),
            '@constants': path.resolve(__dirname, './src/constants'),
            '@contexts': path.resolve(__dirname, './src/contexts'),
            '@data': path.resolve(__dirname, './src/data'),
            '@helpers': path.resolve(__dirname, './src/helpers'),
            '@/types': path.resolve(__dirname, './src/types'),
        },
    },
    plugins: [ react(), svgr() ],
})
