//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("google.googleaffiliatenetworkconversion.Tag", {
    config: {/*DATA*/
	id: 29659,
	name: "Google Affiliate Network Conversion",
	async: true,
	description: "Conversion script for Google Affiliate Network",
	html: "<img src=\"https://gan.doubleclick.net/gan_conversion?advid=${ADVERTISER_ID}&oid=${ORDER_ID}&amt=${SUB_TOTAL}&fxsrc=${CURRENCY}&clickid=${CLICK_ID}&event_type=${EVENT_TYPE}\" width=\"1\" height=\"1\">\n",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Google.jpeg",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 28683,
		name: "Advertiser Id",
		description: "Your Company ID, provided by Google Affiliate Network. This value is the same for all orders.",
		token: "ADVERTISER_ID",
		uv: ""
	},
	{
		id: 28684,
		name: "Order Id",
		description: "The customer order id, a unique identifier that allows you to map this conversion",
		token: "ORDER_ID",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 28685,
		name: "Order Subtotal",
		description: "The total conversion value",
		token: "SUB_TOTAL",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 28686,
		name: "Currency Code",
		description: "Currency code related to the order amounts and Product prices.",
		token: "CURRENCY",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 28688,
		name: "Click Id",
		description: "Unique identifier generated on each click. Set to 0 if not used.",
		token: "CLICK_ID",
		uv: ""
	},
	{
		id: 28689,
		name: "Event Type",
		description: "Define the type of event. Valid options are \"transaction\" or \"action\".",
		token: "EVENT_TYPE",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});