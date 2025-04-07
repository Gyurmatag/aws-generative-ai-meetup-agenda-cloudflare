CREATE TABLE `talks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`time` text NOT NULL,
	`title` text NOT NULL,
	`speaker` text,
	`icon_name` text NOT NULL,
	`icon_color` text NOT NULL,
	`current` integer DEFAULT false,
	`created_at` text DEFAULT CURRENT_TIMESTAMP
);
