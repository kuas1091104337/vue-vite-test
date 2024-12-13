// uno.config.ts
import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerCompileClass from '@unocss/transformer-compile-class'

export default defineConfig({
  // ...UnoCSS options
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerCompileClass(),
  ],
  presets: [
    presetUno(),
  ],
})
