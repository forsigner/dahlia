import { join } from 'path'
import { srcDir, reactScriptsPaths, entryPath, tmpPublicDir } from './paths'
import { getDahliaConfig } from './getDahliaConfig'

export const customizePaths = () => {
  const paths = require(reactScriptsPaths)

  paths.appSrc = srcDir
  paths.appIndexJs = entryPath
  paths.appPublic = tmpPublicDir
  paths.appHtml = join(srcDir, '.dahlia', 'public','index.html')

  // customize build dir
  const dahliaConfig = getDahliaConfig()
  if (dahliaConfig && dahliaConfig.buildDir) {
    paths.appBuild = dahliaConfig.buildDir
  }

  if (dahliaConfig && dahliaConfig.appHtml) {
    paths.appHtml = dahliaConfig.appHtml
  }

  require(reactScriptsPaths)
  require.cache[require.resolve(reactScriptsPaths)].exports = paths
}
