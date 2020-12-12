package com.mytubevideo;

public class VideoProcessor {
    public void process(Video video){
        //Encoder
        var encoder = new VideoEncoder();
        encoder.encode(video);

        //Database
        var database = new VideoDatabase();
        database.store(video);

        //EmailService
        var emailService = new EmailService();
        emailService.sendEmail(video.getUser());
    }
}
