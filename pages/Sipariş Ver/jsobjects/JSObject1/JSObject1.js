export default {
	IconButton1onClick () {
		//	write code here
		{{ Query1.run().then(() => { resetWidget("InputMusteri"); resetWidget("InputHizmet"); resetWidget("InputTutar"); }) }}
	}
}