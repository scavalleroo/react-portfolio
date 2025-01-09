import { Component } from 'react';

class AppFunctions extends Component {
    downloadCV = () => {
        const fileUrl = `/Curriculum.pdf`;
        const fileName = 'AlessandroCavallottiResume.pdf';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', fileName); // Set the file name for the download
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

    handleEmailClick = () => {
        const email = "cavallotti.alessandro00@gmail.com"; // recipient email address
        const subject = "Contacted from alessandrocavallotti.com"; // email subject
        const body = "Hello, I am writing to you about..."; // email body
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open the mail client using the mailto link
        window.location.href = mailtoLink;
    };

    render() {
        return null; // This component is only used for functionality, so it doesn't render anything
    }
}

export const downloadCV = () => {
    const fileUrl = `/Curriculum.pdf`;
    const fileName = 'AlessandroCavallottiResume.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', fileName); // Set the file name for the download
    document.body.appendChild(link);
    link.click();
    link.remove();
};

export default AppFunctions;