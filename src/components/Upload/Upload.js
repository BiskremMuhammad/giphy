import React, { Component } from 'react';
import UploadAxios from './UploadAxios';

// styles
import styles from './Upload.css';

// assets components
import Button from '../UI/LoadMore/LoadMore';
import Spinner from '../UI/Spinner/Spinner';

UploadAxios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

class Upload extends Component{

	state = {
		selectedFile: null,
		loaded: false,
		error: '',
		success: false }

	handleselectedFile = event => {
		this.setState({
			selectedFile: event.target.files[0],
			error: ''
		})
	};

	handleUpload = () => {
		if(!this.state.selectedFile){
			this.setState({ error: 'No File selected.' });
		}
		else {
			this.setState({ loaded: true, error: '' });
			const data = new FormData();
			data.append('file', this.state.selectedFile);

			UploadAxios.post('', data)
				.then(res => {
					this.setState({ success: true });
			  });
		}
	};

	render() {
		let content = (
			<div>
		        <input className={styles.Uploader} type="file" onChange={this.handleselectedFile} />
		        {this.state.loaded ? <Spinner /> : <Button title="Upload" click={this.handleUpload} />}
		        <br />
		        <p className="text-danger">{this.state.error}</p>
			</div>
		);
		if(this.state.success){
			content = <p><i className="far fa-check-circle text-success"></i> Your GIF is Uploaded.</p>;
		}
		return (
			<section className={styles.UploadPage}>
				<h1 className={styles.Title}>Upload your GIF</h1>
				{content}
			</section>
		);
	}
}

export default Upload;