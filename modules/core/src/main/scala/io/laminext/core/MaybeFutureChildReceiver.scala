package io.laminext.core

import com.raquo.laminar.api.L._
import com.raquo.laminar.nodes.ChildNode
import com.raquo.laminar.nodes.ReactiveElement
import org.scalajs.dom
import scala.concurrent.Future

object MaybeFutureChildReceiver {

  @inline def <--(future: Future[Option[ChildNode[dom.Node]]]): Inserter[ReactiveElement.Base] =
    child.maybe <-- EventStream.fromFuture(future)

}
