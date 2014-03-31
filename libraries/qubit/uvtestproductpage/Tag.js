//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("qubit.uvtestproductpage.Tag", {
	config: {
		/*DATA*/
		name: "UV Test - Product Page",
		async: true,
		description: "test opentag on a product page",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/qubit_Q.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Product Id",
			description: "",
			token: "a",
			uv: "universal_variable.product.id"
		},
		{
			name: "Product Name",
			description: "",
			token: "b",
			uv: "universal_variable.product.name"
		},
		{
			name: "Product Manufacturer",
			description: "",
			token: "c",
			uv: "universal_variable.product.manufacturer"
		},
		{
			name: "Product Category",
			description: "",
			token: "d",
			uv: "universal_variable.product.category"
		},
		{
			name: "Product Sub-Category",
			description: "",
			token: "e",
			uv: "universal_variable.product.subcategory"
		},
		{
			name: "Product SKU",
			description: "",
			token: "f",
			uv: "universal_variable.product.sku_code"
		},
		{
			name: "Product Linked Products",
			description: "",
			token: "g",
			uv: "universal_variable.product.linked_products[#]"
		},
		{
			name: "Product Unit Price",
			description: "",
			token: "h",
			uv: "universal_variable.product.unit_price"
		},
		{
			name: "Product Unit Sale Price",
			description: "",
			token: "i",
			uv: "universal_variable.product.unit_sale_price"
		},
		{
			name: "Product Currency",
			description: "",
			token: "j",
			uv: "universal_variable.product.currency"
		},
		{
			name: "Product Stock",
			description: "",
			token: "k",
			uv: "universal_variable.product.stock"
		},
		{
			name: "Product Size",
			description: "",
			token: "l",
			uv: "universal_variable.product.size"
		},
		{
			name: "Product Color",
			description: "",
			token: "m",
			uv: "universal_variable.product.color"
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

console.log("" + this.valueForToken("a") + "");
console.log("" + this.valueForToken("b") + "");
console.log("" + this.valueForToken("c") + "");
console.log("" + this.valueForToken("d") + "");
console.log("" + this.valueForToken("e") + "");
console.log("" + this.valueForToken("f") + "");
console.log("" + this.valueForToken("g") + "");
console.log("" + this.valueForToken("h") + "");
console.log("" + this.valueForToken("i") + "");
console.log("" + this.valueForToken("j") + "");
console.log("" + this.valueForToken("k") + "");
console.log("" + this.valueForToken("l") + "");
console.log("" + this.valueForToken("m") + "");
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
