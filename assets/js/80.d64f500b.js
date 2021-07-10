(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{806:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"rabbitmq-appender"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-appender"}},[t._v("#")]),t._v(" RabbitMQ Appender")]),t._v(" "),a("Banner",{attrs:{src:"/rabbitmq.svg",height:"100",href:"https://www.rabbitmq.com/"}}),t._v(" "),a("p",[t._v("Push log events to a "),a("a",{attrs:{href:"https://www.rabbitmq.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RabbitMQ"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save @tsed/logger-rabitmq\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("If you want to be sure that all messages have been sent before your programme exits, remember to call "),a("code",[t._v("logger.shutdown()")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("type")]),t._v(" - "),a("code",[t._v("rabbitmq")])]),t._v(" "),a("li",[a("code",[t._v("layout")]),t._v(" - "),a("code",[t._v("object")]),t._v(" (optional, defaults to "),a("code",[t._v("messagePassThroughLayout")]),t._v(") - the layout to use for log events (see "),a("RouterLink",{attrs:{to:"/docs/layouts/"}},[t._v("Layouts")]),t._v(").")],1),t._v(" "),a("li",[a("code",[t._v("options.host")]),t._v(" - "),a("code",[t._v("string")]),t._v(" (optional, defaults to "),a("code",[t._v("127.0.0.1")]),t._v(") - the location of the rabbitmq server")]),t._v(" "),a("li",[a("code",[t._v("options.port")]),t._v(" - "),a("code",[t._v("integer")]),t._v(" (optional, defaults to "),a("code",[t._v("5672")]),t._v(") - the port the rabbitmq server is listening on")]),t._v(" "),a("li",[a("code",[t._v("options.username")]),t._v(" - "),a("code",[t._v("string")]),t._v(" (optional, defaults to "),a("code",[t._v("guest")]),t._v(") - username to use when authenticating connection to rabbitmq")]),t._v(" "),a("li",[a("code",[t._v("options.password")]),t._v(" - "),a("code",[t._v("string")]),t._v(" (optional, defaults to "),a("code",[t._v("guest")]),t._v(") - password to use when authenticating connection to rabbitmq")]),t._v(" "),a("li",[a("code",[t._v("options.routing_key")]),t._v(" - "),a("code",[t._v("string")]),t._v(" (optional, defaults to "),a("code",[t._v("logstash")]),t._v(") - rabbitmq message's routing_key")]),t._v(" "),a("li",[a("code",[t._v("options.durable")]),t._v(" - "),a("code",[t._v("string")]),t._v(" (optional, defaults to false) - will that RabbitMQ lose our queue.")]),t._v(" "),a("li",[a("code",[t._v("options.exchange")]),t._v(" - "),a("code",[t._v("string")]),t._v(" (optional, defaults to "),a("code",[t._v("log")]),t._v(")- rabbitmq send message's exchange")]),t._v(" "),a("li",[a("code",[t._v("options.mq_type")]),t._v(" - "),a("code",[t._v("string")]),t._v(" (optional, defaults to "),a("code",[t._v("direct")]),t._v(") - rabbitmq message's mq_type")]),t._v(" "),a("li",[a("code",[t._v("options.vhost")]),t._v(" - "),a("code",[t._v("string")]),t._v(" (optional, defaults to "),a("code",[t._v("/")]),t._v(") - vhost to use")]),t._v(" "),a("li",[a("code",[t._v("options.shutdownTimeout")]),t._v(" - "),a("code",[t._v("integer")]),t._v(" (optional, defaults to "),a("code",[t._v("10000")]),t._v(") - maximum time in milliseconds to wait for messages to be sent during log4js shutdown.")])]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@tsed/logger"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@tsed/logger-rabbitmq"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" logger "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"loggerName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nlogger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("appenders"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stdout"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rabbitmq"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  level"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"info"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'127.0.0.1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5672")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    username"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'guest'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    password"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'guest'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    routing_key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logstash'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    exchange"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'exchange_logs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mq_type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'direct'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    durable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("p",[t._v("This configuration will push log messages to the rabbitmq on "),a("code",[t._v("127.0.0.1:5672")]),t._v(".")])],1)}),[],!1,null,null,null);s.default=n.exports}}]);