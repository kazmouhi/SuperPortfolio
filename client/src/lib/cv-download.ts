export function downloadCV() {
  // Download the actual PDF CV file
  const link = document.createElement('a');
  link.href = '/attached_assets/CV_HASSAN_KAZMOUHI (1)_1757439182141.pdf';
  link.download = 'Hassan-Kazmouhi-CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
