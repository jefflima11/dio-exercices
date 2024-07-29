extends CharacterBody2D


@onready var animation_player: AnimationPlayer = $AnimationPlayer

var is_running: bool = false

func _process(delta: float)-> void:
	if Input.is_action_just_pressed("ui_accept"):
		if is_running:
			animation_player.play("idle")
			is_running = false
		else:
			animation_player.play("run")
			is_running = true
