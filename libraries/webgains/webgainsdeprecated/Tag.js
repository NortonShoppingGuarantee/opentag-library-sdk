//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("webgains.webgainsdeprecated.Tag", {
	config: {
		/*DATA*/
		name: "WebGains [DEPRECATED]",
		async: true,
		description: "",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/webgains_logo.jpg",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: true,
		parameters: [
		{
			name: "Program ID",
			description: "unique identifier for merchant (e.g. 1234) [COMPULSORY]",
			token: "program_id",
			uv: ""
		},
		{
			name: "Client Event ID - Static (client specific)",
			description: "commission identifier (e.g. 1234) [COMPULSORY]",
			token: "client_event_id",
			uv: ""
		},
		{
			name: "Comment",
			description: "merchant comments (e.g. test order) [OPTIONAL]",
			token: "comment",
			uv: ""
		},
		{
			name: "SubDomain",
			description: "e.g. track [COMPULSORY]",
			token: "subdomain",
			uv: ""
		},
		{
			name: "Customer ID",
			description: "unique string for customer, used for database tracking (e.g. 2389476237ey29) [COMPULSORY]",
			token: "customer_id",
			uv: "universal_variable.user.user_id"
		},
		{
			name: "Order Reference",
			description: "unique order reference for transaction (e.g. Order1234) [COMPULSORY]",
			token: "order_reference",
			uv: "universal_variable.transaction.order_id"
		},
		{
			name: "Order Value",
			description: "Sale Value [COMPULSORY] - including Shipping/Discounts",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		},
		{
			name: "Voucher Code",
			description: "voucher code if used (e.g. testvc) [OPTIONAL]",
			token: "voucher_code",
			uv: "universal_variable.transaction.voucher"
		},
		{
			name: "Currency",
			description: "currency identifier if other currencies are used (e.g. EUR) [COMPULSORY]",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		},
		{
			name: "Unit Prices List",
			description: "array of all product prices present on page [COMPULSORY] - including discounts etc.",
			token: "unit_prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		},
		{
			name: "Unit Names List",
			description: "array of names  of all items present on page [OPTIONAL]",
			token: "unit_names",
			uv: "universal_variable.transaction.line_items[#].product.name"
		},
		{
			name: "Product IDs List",
			description: "array of all product IDs present on page [COMPULSORY]",
			token: "product_id_list",
			uv: "universal_variable.transaction.line_items[#].product.id"
		},
		{
			name: "Language",
			description: "language of home network (e.g. en_us) [OPTIONAL]",
			token: "language",
			uv: "universal_variable.user.language"
		},
		{
			name: "Item Quantity",
			description: "array of item quantities",
			token: "unit_quantity",
			uv: "universal_variable.transaction.line_items[#].quantity"
		},
		{
			name: "Product Event ID - Dynamic (item specific)",
			description: "array of product.wgeventid values - should return empty array if no product.wegeventid are available",
			token: "product_event_id",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/


  var wgItems = function ()
  {
    var wgItemsString = "";

    for (i=0; i < this.valueForToken("unit_prices").length; i++)
    {
      /* if there's a dynamic event id specific to each item - it will be used */
      if (this.valueForToken("product_event_id").length  !== 0)
      {
        wgItemsString = wgItemsString + this.valueForToken("product_event_id")[i] + "::" + (Number(this.valueForToken("unit_prices")[i]) * Number(this.valueForToken("unit_quantity")[i])) + "::" + this.valueForToken("unit_quantity")[i] + "x" + this.valueForToken("unit_names")[i] + "::" + this.valueForToken("product_id_list")[i] + "::" + "" + this.valueForToken("voucher_code") + "";
      }
      /* othwerwise - if there's not an event id specific to each item - the static client-id value will be used*/
      else
      {
        wgItemsString = wgItemsString + "" + this.valueForToken("client_event_id") + "" + "::" + (Number(this.valueForToken("unit_prices")[i]) * Number(this.valueForToken("unit_quantity")[i])) + "::" + this.valueForToken("unit_quantity")[i] + "x" + this.valueForToken("unit_names")[i] + "::" + this.valueForToken("product_id_list")[i] + "::" + "" + this.valueForToken("voucher_code") + "";
      }
      if (this.valueForToken("unit_prices").length !== 1 && i < this.valueForToken("unit_prices").length-1)
      {
        wgItemsString = wgItemsString + "|";
      }
    }
    return wgItemsString;
  };

  if(location.protocol.toLowerCase() == "https:") wgProtocol="https";
  else wgProtocol = "http";

  wgUri = "//" + this.valueForToken("subdomain") + ".webgains.com/transaction.html?";
  wgUri += "wgrs=1";
  wgUri += "&wgver=1.2&wgprotocol=";
  wgUri += wgProtocol + "&wgsubdomain=" + this.valueForToken("subdomain") + "";
  wgUri += "&wglang=" + this.valueForToken("language") + "";
  wgUri += "&wgprogramid=" + this.valueForToken("program_id") + "&wgeventid=" + this.valueForToken("client_event_id") + "";
  wgUri += "&wgvalue=" + this.valueForToken("order_total") + "&wgchecksum=";
  wgUri += "&wgorderreference=" + this.valueForToken("order_reference") + "";
  wgUri += "&wgcomment=" + escape("" + this.valueForToken("comment") + "");
  wgUri += "&wglocation=" + escape(document.referrer);
  wgUri += "&wgitems=" + escape(wgItems());
  wgUri += "&wgcustomerid=" + escape("" + this.valueForToken("customer_id") + "");
  wgUri += "&wgvouchercode=" +escape("" + this.valueForToken("voucher_code") + "");
  wgUri += "&wgCurrency=" + escape("" + this.valueForToken("currency") + "");


  // Load the image pixel
  var img = new Image();
  img.src = wgUri;

		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});
