import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

const external = ['request-hooks', 'gql-tag', 'stamen', 'react', 'react-dom', 'corolla']

const plugins = [
  typescript({
    rollupCommonJSResolveHack: true,
  }),
]

const getOutput = file => {
  const output = [
    {
      file: `${file}.js`,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
  ]
  if (file === 'index') {
    output.push({
      file: `${file}.es.js`,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    })
  }
  return output
}

const files = ['index', 'router', 'store', 'http', 'form']

export default files.map(file => ({
  input: `src/${file}.tsx`,
  output: getOutput(file),
  external,
  plugins,
}))
