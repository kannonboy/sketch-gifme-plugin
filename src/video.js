import { setInterval } from 'sketch-polyfill-setinterval'

const images = []
for (let i = 0; i < 6; i++) {
  images.push(NSImage.alloc().initByReferencingFile('/Users/tpettersen/Desktop/' + i + '.png'))
}

export default function (context) {

  const layer = context.document.selectedLayers().layers()[0]

  let index = 0

  setInterval(function () {
    const fill = layer.style().fills().firstObject()
    fill.setFillType(4)
    index = (index + 1) % images.length
    fill.setImage(MSImageData.alloc().initWithImage(images[index]))
    fill.setPatternFillType(1)
  }, 100)

}
