package com.mytubevideo;

public class Main {

    public static void main(String[] args) {
	// write your code here
        Video video = new Video();
        video.setTitle("BirthDay.mp4");
        video.setTitle("Angel's Bithday");
        video.setUser(new User("Angel@gmail.com"));

        com.mytubevideo.VideoProcessor processor = new VideoProcessor();
        processor.process(video);
    }
}