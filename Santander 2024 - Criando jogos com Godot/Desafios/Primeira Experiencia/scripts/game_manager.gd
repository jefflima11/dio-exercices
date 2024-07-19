extends Node

@export var object_tamplates: Array[PackedScene]

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass

func _input(event: InputEvent) -> void:
	if event is InputEventMouseButton:
		if event.button_index == 1:
			if event.pressed:
				spawn_object(event.position)


func spawn_object(position: Vector2) -> void:
	var index: int = randi_range(0, object_tamplates.size() - 1)
	var object_tamplate = object_tamplates[index]
	var object: RigidBody2D = object_tamplate.instantiate()
	object.position = position
	add_child(object)
