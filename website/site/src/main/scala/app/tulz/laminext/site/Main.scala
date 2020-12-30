package app.tulz.laminext.site

import app.tulz.highlightjs.Highlight
import app.tulz.highlightjs.HighlightScala
import app.tulz.tailwind.modal.Modal
import org.scalajs.dom

import scala.scalajs.js.annotation.JSExport
import scala.scalajs.js.annotation.JSExportTopLevel

@JSExportTopLevel("App")
object Main {

  @JSExport
  def start(): Unit = {
    Modal.initNoScrollClass()
    LinkHandler.install()
    val wiring = Wiring()
    removeNoJsClass(wiring.ssrContext)
    insertJsClass(wiring.ssrContext)
    Highlight.registerLanguage("scala", HighlightScala)
    wiring.routes.start()
  }

  private def insertJsClass(ssrContext: SsrContext): Unit = {
    if (!ssrContext.ssr) {
      val style = dom.document.createElement("style").asInstanceOf[dom.html.Style]
      style.`type` = "text/css"
      style.innerHTML = s""".hidden-if-js{display: none;}""".stripMargin
      val _ = dom.document.getElementsByTagName("head")(0).appendChild(style)
    }
  }

  private def removeNoJsClass(ssrContext: SsrContext): Unit = {
    if (!ssrContext.ssr) {
      Option(dom.document.head.querySelector("style#no-js")).foreach(dom.document.head.removeChild(_))
    }
  }

}