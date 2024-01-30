CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`username` text NOT NULL,
	`email` text,
	`image` text,
	`created_at` integer DEFAULT (strftime('%s', 'now')) NOT NULL
);
